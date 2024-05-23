import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

/**
 * TODO
 * SHARES RenderTarget with seeds
 * One render call computes a single return map.
 * Input can be either seeds, or the result of a previous return map.
 * The resulting texture stores return position and direction as well as success indicator, advection time, arc length and step counter:
 * 
 * size 2*domain_pixel_x, 2*domain_pixel_y
 * 
 * --> 4 vec4 per grid node
 * 
 * 1. vec4: 3 floats for end position (in case we do not terminate on the plane)
 * 2. vec4: 3 floats for end velocity
 * 3. vec4: 1 float for success indicator (0=no return, 1=return) --> for first slice: later in a second step: overwrite this with number of succesfull returns (this might be an interesting number to plot as scalar field)
 *          1 float for advection time
 *          1 float for arc length
 *          1 float for step counter
 * 4. vec4: placeholder
 */
class OffscreenRendererFlowMap extends OffscreenRenderer {

    constructor(renderer, simulationParameters) {
        super(renderer, simulationParameters)
    }

    getNumPixelsPerNodeX() {
        return 2;
    }

    getNumPixelsPerNodeY() {
        return 2;
    }

    getNumLayers(){
        return 3;
    }

    addAdditionalUniforms() {
        //this.uniforms["seed_direction"] = { type: 'vec3', value: new THREE.Vector3(0, 0, 0) };
        //this.uniforms["seed_energy"] = { type: 'float', value: 1.0 };
    }

    setAdditionalUniforms() {
        //this.dummy_plane_mesh.material.uniforms.seed_direction.value.x = this.simulationParameters.seed_direction_x;
        //this.dummy_plane_mesh.material.uniforms.seed_direction.value.y = this.simulationParameters.seed_direction_y;
        //this.dummy_plane_mesh.material.uniforms.seed_direction.value.z = this.simulationParameters.seed_direction_z;
        //this.dummy_plane_mesh.material.uniforms.seed_energy.value = this.simulationParameters.seed_energy;
        
    }

    compute(){
        this.computeLayer(1);
    }

    fragmentShaderMethodComputation() {
        return `
            outputColor = vec4(float(virtual_texture_x), float(virtual_texture_y), 0.0, 1.0); 
            
        `
    }

}

export { OffscreenRendererFlowMap }