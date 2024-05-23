import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

/**
 * TODO
 * The resulting texture stores positions and velocities of the seeds and is padded with additional values to have the same layout as flow map:
 * 
 * size 2*domain_pixel_x, 2*domain_pixel_y
 * 
 * --> 4 vec4 per grid node
 * 
 * 1. vec4: 3 floats for position
 * 2. vec4: 3 floats for velocity
 * 3. vec4: [value=0] to have same layout as flowmap
 *          [value=0] to have same layout as flowmap
 *          [value=0] to have same layout as flowmap
 *          [value=0] to have same layout as flowmap
 * 4. vec4: placeholder to have same layout as flowmap
 */
class OffscreenRendererSeedsAndReturns extends OffscreenRenderer {

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
        this.uniforms["texture_input"] = { type: 'sampler3D', value: null};
    }

    setAdditionalUniforms() {
        //this.dummy_plane_mesh.material.uniforms.texture_input.value = this.offscreenRendererSeeds.renderTarget.texture;        
    }

    fragmentShaderMethodComputation() {
        return `
            ivec3 pointer = ivec3(int(x_pixel), int(y_pixel), 0);
            outputColor = texelFetch(texture_input, pointer, 0);       
            //outputColor = vec4(1.0, 0.0, 0.0, 1.0);      
        `
    }

}

export { OffscreenRendererSeedsAndReturns }