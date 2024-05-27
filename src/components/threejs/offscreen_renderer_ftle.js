import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"



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
                    computeFTLE(x_pixel_mod, y_pixel_mod);
                }
            }
        `
    }

    fragmentShaderAdditionalMethodDeclarations(){
        return glsl`
        void computeFTLE(int x_pixel_mod, int y_pixel_mod);
        `;
    }

    fragmentShaderAdditionalMethodDefinitions(){
        return glsl`



        void computeFTLE(int x_pixel_mod, int y_pixel_mod){
            float dx = 1.0 / (planeDimensionsPixel.x-1.0);
            float dy = 1.0 / (planeDimensionsPixel.y-1.0);
            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, target_layer_index);

            //finite differences
            //finite differences in x direction
            vec3 df_dx;
            if(x_pixel_mod == 0){
                df_dx = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(1,0,0), dx );
            }
            else if(x_pixel_mod == int(planeDimensionsPixel.x-1.0)){
                df_dx = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), dx );
            }
            else{
                df_dx = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), ivec3(1,0,0), dx );
            }
            //finite differences in y direction
            vec3 df_dy;
            if(y_pixel_mod == 0){
                df_dy = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(0,1,0), dx );
            }
            else if(y_pixel_mod == int(planeDimensionsPixel.y-1.0)){
                df_dy = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), dx );
            }
            else{
                df_dy = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), ivec3(0,1,0), dy );
            }
            //finite differences in z direction = (0,0,0)
            vec3 df_dz = vec3(0,0,0);

            //jacobian
            mat3 J = BuildJacoby(df_dx, df_dy, df_dz);
            //transpose jacobian
            mat3 JT = transpose(J);
            //C = cauchy-green tensor = J^T * J
            mat3 C = JT * J;

            //biggest eigenvalue lambda_max
            vec3 lambdas = vec3(0,0,0);
            mat3eigenvalues(C, lambdas);
            float lambda_max = max(lambdas.x, max(lambdas.y, lambdas.z));

            //FTLE
            float advection_time = 1.0;//TODO SCALING?
            float ftle = 1.0 / advection_time * log(sqrt(lambda_max));

            outputColor = vec4(ftle, 0.0, 0.0, 1.0); 
        }
        `
    }

}

export { OffscreenRendererFTLE }