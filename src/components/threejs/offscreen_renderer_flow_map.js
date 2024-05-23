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

    link(offscreenRendererSeedsAndReturns){
        this.offscreenRendererSeedsAndReturns = offscreenRendererSeedsAndReturns;
    }

    getNumPixelsPerNodeX() {
        return 2;
    }

    getNumPixelsPerNodeY() {
        return 2;
    }

    getNumLayers(){
        return 1;
    }

    addAdditionalUniforms() {
        this.uniforms["texture_seeds_and_returns"] = { type: 'sampler3D', value: this.offscreenRendererSeedsAndReturns.renderTarget.texture};
    }

    setAdditionalUniforms() {
        this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value = this.offscreenRendererSeedsAndReturns.renderTarget.texture;        
    }

    fragmentShaderMethodComputation() {
        return `
            //renaming for convenience
            float x1 = primary_x;
            float x2 = secondary_x;
            float m1 = primary_mass;
            float m2 = secondary_mass;

            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, 0);
            vec2 seed_position = texelFetch(texture_seeds_and_returns, pointer, target_layer_index-1).xy;
            float x = seed_position.x;
            float y = seed_position.y;
            vec2 primary_position = vec2(x1, 0.0);
            vec2 secondary_position = vec2(x2, 0.0);

            


            

            if(virtual_texture_y == 1){
                outputColor = vec4(float(virtual_texture_x), float(virtual_texture_y), 0.0, 1.0); 
            }
            else{
                if(x > 0.5){
                    outputColor = vec4(float(virtual_texture_x), float(virtual_texture_y), 0.0, 1.0); 
                    outputColor = vec4(1.0, 0.0, 0.0, 1.0); 
                }
                /*
                if(x > 0.5){
                    outputColor = vec4(1.0, 0.0, 0.0, 1.0); 
                }else{
                    outputColor = vec4(0.0, 0.0, 1.0, 1.0); 
                }
                */
            }

            
        `
    }

}

export { OffscreenRendererFlowMap }