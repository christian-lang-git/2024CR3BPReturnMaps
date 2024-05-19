import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";

class OffscreenRendererFlowMap {

    constructor(renderer) {
        this.renderer = renderer;
        this.initialize();
    }

    initialize() {
        console.warn("INITIALIZE OffscreenRendererFlowMap");

        this.width = 100;
        this.height = 100;
        this.bufferScene = new THREE.Scene();
        this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,//THREE.LinearFilter
            format: THREE.RGBAFormat,
            type: THREE.FloatType
        });
        this.bufferCamera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 100);
        this.bufferCamera.position.z = 5;

        this.dummy_plane_geometry = new THREE.PlaneGeometry(8, 8);
        //this.dummy_plane_material = new THREE.MeshBasicMaterial({ color: 0x500000, side: THREE.DoubleSide });

        this.uniforms = {
            planeCenter: { type: 'vec2', value: new THREE.Vector2(0,0) },
            planeCornerBL: { type: 'vec2', value: new THREE.Vector2(-1,-1) },
            planeDimensions: { type: 'vec2', value: new THREE.Vector2(2,2) },
            planeDimensionsPixel: { type: 'vec2', value: new THREE.Vector2(100,100) }
        }
        this.dummy_plane_material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            fragmentShader: this.fragmentShader(),
            vertexShader: this.vertexShader(),
        })


        this.dummy_plane_mesh = new THREE.Mesh(this.dummy_plane_geometry, this.dummy_plane_material);
        this.bufferScene.add(this.dummy_plane_mesh);

        this.compute();
    }

    updateTexturedPlane(simulationParameters){           
        this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.x = simulationParameters.domain_min_x;
        this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.y = simulationParameters.domain_min_y;
        this.dummy_plane_mesh.material.uniforms.planeDimensions.value.x = simulationParameters.domain_dimension_x;
        this.dummy_plane_mesh.material.uniforms.planeDimensions.value.y = simulationParameters.domain_dimension_y;
    }

    compute() {
        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.bufferScene, this.bufferCamera);
        this.renderer.setRenderTarget(null);

        const pixelBuffer = new Float32Array(this.width * this.height * 4);
        this.renderer.readRenderTargetPixels(this.renderTarget, 0, 0, this.width, this.height, pixelBuffer);
        console.log("pixelBuffer", pixelBuffer);
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
        return `
        uniform vec2 planeCenter; 
        uniform vec2 planeCornerBL; 
        uniform vec2 planeDimensions; 
        uniform vec2 planeDimensionsPixel; 
        varying vec3 vUv;
  
        void main() {
            //coordinates in pixel starting bottom left
            float x_pixel = gl_FragCoord[0];//x
            float y_pixel = gl_FragCoord[1];//y
            float x_coord = planeCornerBL.x + (x_pixel / planeDimensionsPixel.x) * planeDimensions.x;
            float y_coord = planeCornerBL.y + (y_pixel / planeDimensionsPixel.y) * planeDimensions.y;

            if(x_pixel>50.0){
                gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
            else{
                gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
            }
            if(y_pixel>75.0){
                gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
            }

            if(x_pixel < 1.0){
                gl_FragColor = vec4(0.42, 8.0, -10.0, 9999.0);
            }

            if(x_coord > -0.1 && x_coord < 0.1 && y_coord > -0.1 && y_coord < 0.1){
                gl_FragColor = vec4(1.0, 0.0, 1.0, 9999.0);
            }
        }    
        `
    }

}

export { OffscreenRendererFlowMap }