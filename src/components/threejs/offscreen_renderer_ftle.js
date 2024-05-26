import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"
import * as LINALG from "@/components/glsl/linalg";
import * as UTILITY from "@/components/glsl/utility";


const glsl = x => x[0];
/**
 * TODO
 * One render call computes ftle for a single return map. Uses return map as input and changes only part of the input (x component of 4th vec4, see below)
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
 * 4. vec4: 1 float for ftle value
 *  	    3 placeholder
 */
class OffscreenRendererFTLE extends OffscreenRenderer {


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
        this.uniforms["max_steps"] = { type: 'int', value: 0};
        this.uniforms["step_size"] = { type: 'float', value: 0};
        this.uniforms["signum"] = { type: 'float', value: 1.0};//TODO: must be set when switching to forward/backward direction  
        
        console.warn("FTLE uniforms", this.uniforms);
    }

    setAdditionalUniforms() {
        this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value = this.offscreenRendererSeedsAndReturns.renderTarget.texture;     
        this.dummy_plane_mesh.material.uniforms.max_steps.value = this.simulationParameters.max_steps;       
        this.dummy_plane_mesh.material.uniforms.step_size.value = this.simulationParameters.step_size;       
 
    }

    fragmentShaderMethodComputation() {
        return glsl`
            ivec3 pointer_original = ivec3(int(x_pixel), int(y_pixel), target_layer_index);

            if(virtual_texture_y == 0){
                if(virtual_texture_x == 0){
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
                else{
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
            }
            else{
                if(virtual_texture_x == 0){
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
                else{
                    computeFTLE();
                }
            }
        `
    }

    fragmentShaderAdditionalMethodDeclarations(){
        return glsl`
        void computeFTLE();
        `;
    }

    fragmentShaderAdditionalMethodDefinitions(){
        return glsl`
        void computeFTLE(){
            outputColor = vec4(0.1, 0.5, 1.0, 1.0); 
        }
        `
    }

}

export { OffscreenRendererFTLE }