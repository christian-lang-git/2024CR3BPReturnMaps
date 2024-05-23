import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";

class OffscreenRenderer {

    constructor(renderer, simulationParameters) {
        this.renderer = renderer;
        this.simulationParameters = simulationParameters;
        this.use_external_render_target = false;
        this.offscreen_renderer_for_external_render_target = null;
    }

    /**
     * By calling this function THIS offscreenRenderer will not generate a renderTarget.
     * Instead it will use the same renderTarget as the one used by the parameter targetOffscreenRenderer
     * @param {OffscreenRenderer} targetOffscreenRenderer 
     */
    setExternalRenderTarget(targetOffscreenRenderer){
        this.use_external_render_target = true;
        this.offscreen_renderer_for_external_render_target = targetOffscreenRenderer;
    }

    initialize() {
        console.warn("INITIALIZE OffscreenRenderer");

        this.width = 100;
        this.height = 100;

        this.updateRenderTarget();
        this.bufferScene = new THREE.Scene();
        this.bufferCamera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 100);
        this.bufferCamera.position.z = 5;

        this.dummy_plane_geometry = new THREE.PlaneGeometry(100, 100);
        //this.dummy_plane_material = new THREE.MeshBasicMaterial({ color: 0x500000, side: THREE.DoubleSide });

        this.generateUniforms();
        this.dummy_plane_material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            fragmentShader: this.fragmentShader(),
            vertexShader: this.vertexShader(),
            glslVersion: THREE.GLSL3
        })

        console.log(this.fragmentShader())

        this.dummy_plane_mesh = new THREE.Mesh(this.dummy_plane_geometry, this.dummy_plane_material);
        this.bufferScene.add(this.dummy_plane_mesh);

        this.compute();
    }

    updateTexturedPlane() {
        this.setAdditionalUniforms();        
        this.dummy_plane_mesh.material.uniforms.mu.value = this.simulationParameters.mu;
        this.dummy_plane_mesh.material.uniforms.angular_velocity.value = this.simulationParameters.angular_velocity;
        this.dummy_plane_mesh.material.uniforms.primary_x.value = this.simulationParameters.getPrimaryX();
        this.dummy_plane_mesh.material.uniforms.secondary_x.value = this.simulationParameters.getSecondaryX();
        this.dummy_plane_mesh.material.uniforms.primary_mass.value = this.simulationParameters.getPrimaryMass();
        this.dummy_plane_mesh.material.uniforms.secondary_mass.value = this.simulationParameters.getSecondaryMass();
        this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.x = this.simulationParameters.domain_min_x;
        this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.y = this.simulationParameters.domain_min_y;
        this.dummy_plane_mesh.material.uniforms.planeDimensions.value.x = this.simulationParameters.domain_dimension_x;
        this.dummy_plane_mesh.material.uniforms.planeDimensions.value.y = this.simulationParameters.domain_dimension_y;
        this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.x = this.simulationParameters.domain_pixels_x;
        this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.y = this.simulationParameters.domain_pixels_y;

        var update_size = false;
        if (this.simulationParameters.domain_pixels_x != this.width) {
            this.width = this.simulationParameters.domain_pixels_x;
            update_size = true;
        }
        if (this.simulationParameters.domain_pixels_y != this.height) {
            this.height = this.simulationParameters.domain_pixels_y;
            update_size = true;
        }
        if (update_size) {
            this.updateRenderTarget();
        }

        return update_size;

    }

    updateRenderTarget() {
        console.warn("UPDATE RENDER TARGET SIZE");
        if(this.use_external_render_target){
            this.renderTarget = this.offscreen_renderer_for_external_render_target.renderTarget;
        }
        else{
            /*
            this.renderTarget = new THREE.WebGLRenderTarget(this.width * this.getNumPixelsPerNodeX(), this.height * this.getNumPixelsPerNodeY(), {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.NearestFilter,//THREE.LinearFilter
                format: THREE.RGBAFormat,
                type: THREE.FloatType
            });
            */
            
            var total_w = this.width * this.getNumPixelsPerNodeX();
            var total_h = this.height * this.getNumPixelsPerNodeY();
            var total_z = this.getNumLayers();

            this.renderTarget = new THREE.WebGL3DRenderTarget(total_w, total_h, total_z, {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.NearestFilter,//THREE.LinearFilter
                format: THREE.RGBAFormat,
                type: THREE.FloatType
            });

            
            const size = total_w * total_h * total_z * 4; // RGBA
            const data = new Float32Array(size);
            const texture = new THREE.Data3DTexture(data, total_w, total_h, total_z);            
            texture.format = THREE.RGBAFormat;
            texture.type = THREE.FloatType;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.NearestFilter;
            texture.unpackAlignment = 1;

            this.renderTarget.texture = texture;
            
        }
    }

    compute() {
        this.computeLayer(0);
        //this.renderer.setRenderTarget(this.renderTarget, 0);
        //this.renderer.render(this.bufferScene, this.bufferCamera);
        //this.renderer.setRenderTarget(null);

        //const pixelBuffer = new Float32Array(this.width * this.getNumPixelsPerNodeX() * this.height * this.getNumPixelsPerNodeY() * 4);
        //this.renderer.readRenderTargetPixels(this.renderTarget, 0, 0, this.width * this.getNumPixelsPerNodeX(), this.height * this.getNumPixelsPerNodeY(), pixelBuffer);
        //console.log("pixelBuffer", pixelBuffer);
    }

    computeLayer(targetLayerIndex){
        this.dummy_plane_mesh.material.uniforms.target_layer_index.value = targetLayerIndex;
        this.renderer.setRenderTarget(this.renderTarget, targetLayerIndex);
        this.renderer.render(this.bufferScene, this.bufferCamera);
        this.renderer.setRenderTarget(null);
    }

    generateUniforms() {
        this.uniforms = {
            target_layer_index: { type: 'int', value: 0 },
            mu: { type: 'float', value: 0.1 },
            angular_velocity: { type: 'float', value: 1.0 },
            primary_x: { type: 'float', value: 0.0 },
            secondary_x: { type: 'float', value: 0.0 },
            primary_mass: { type: 'float', value: 0.0 },
            secondary_mass: { type: 'float', value: 0.0 },
            planeCenter: { type: 'vec2', value: new THREE.Vector2(0, 0) },
            planeCornerBL: { type: 'vec2', value: new THREE.Vector2(-1, -1) },
            planeDimensions: { type: 'vec2', value: new THREE.Vector2(2, 2) },
            planeDimensionsPixel: { type: 'vec2', value: new THREE.Vector2(100, 100) }
        }
        this.addAdditionalUniforms();
    }

    vertexShader() {
        return `
        varying vec3 vUv; 
    
        void main() {
          vUv = position; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
        `
    }

    fragmentShader() {
        return "" +
            this.getUniformsString() +
            `
        varying vec3 vUv;

        const float G = 1.0;//TODO
        out vec4 outputColor;
  
        void main() {
            //coordinates in pixel in total texture starting bottom left
            float x_pixel = floor(gl_FragCoord[0]);//x
            float y_pixel = floor(gl_FragCoord[1]);//y

            //coordinates in pixel in virtual texture
            int x_pixel_mod = int(x_pixel) % int(planeDimensionsPixel.x);
            int y_pixel_mod = int(y_pixel) % int(planeDimensionsPixel.y);

            //x and y indices of virtual texture e.g., (0,0) is the top left texture
            int virtual_texture_x = int(x_pixel) / int(planeDimensionsPixel.x);
            int virtual_texture_y = int(y_pixel) / int(planeDimensionsPixel.y);

            //world coordinates in virtual texture
            float world_x = planeCornerBL.x + (float(x_pixel_mod) / (planeDimensionsPixel.x - 1.0)) * planeDimensions.x;
            float world_y = planeCornerBL.y + (float(y_pixel_mod) / (planeDimensionsPixel.y - 1.0)) * planeDimensions.y;
        `
            + this.fragmentShaderMethodComputation() +
            `
        }    
        `
            ;
    }

    /**
     * Automatically generates the shader code for uniforms from the method generateUniforms()
     * The example: 
     * 
     *  this.uniforms = {
     *      planeCenter: { type: 'vec2', value: new THREE.Vector2(0,0) },
     *      planeCornerBL: { type: 'vec2', value: new THREE.Vector2(-1,-1) },
     *      planeDimensions: { type: 'vec2', value: new THREE.Vector2(2,2) },
     *      planeDimensionsPixel: { type: 'vec2', value: new THREE.Vector2(100,100) }
     *  };
     *  
     * results in:
     *       
     *      uniform vec2 planeCenter; 
     *      uniform vec2 planeCornerBL; 
     *      uniform vec2 planeDimensions; 
     *      uniform vec2 planeDimensionsPixel; 
     * 
     * @returns shader code for all uniforms
     */
    getUniformsString() {
        return Object.keys(this.uniforms).map(key => {
            const type = this.uniforms[key].type;
            return `uniform ${type} ${key};`;
        }).join('\n');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      REQUIRED METHODS
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * A texture can output a single vec4 for each pixel.
     * If more data per grid node is required, multiple pixels per grid node can be used.
     * 
     * @returns the number of "virtual textures" on the x axis, setting this value to 2 doubles the available data per node
     */
    getNumPixelsPerNodeX() {
        return 1;
    }

    /**
     * A texture can output a single vec4 for each pixel.
     * If more data per grid node is required, multiple pixels per grid node can be used.
     * 
     * @returns the number of "virtual textures" on the y axis, setting this value to 2 doubles the available data per node
     */
    getNumPixelsPerNodeY() {
        return 1;
    }

    /**
     * How many layers of 2D textures make up the 3D texture
     * 
     * @returns the number of layers
     */
    getNumLayers(){
        return 1;
    }

    /**
     * The actual computation of the shader is done in this method.
     * 
     * @returns partial shader code that is copied inside the main function of the shader
     */
    fragmentShaderMethodComputation() {
        return "";
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      OPTIONAL METHODS
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * The following uniforms are created for all offscreen renderers during generateUniforms():
     * - planeCenter
     * - planeCornerBL
     * - planeDimensions
     * - planeDimensionsPixel
     * 
     * Additional uniforms can be created in this method
     */
    addAdditionalUniforms() {

    }

    setAdditionalUniforms() {

    }

}

export { OffscreenRenderer }