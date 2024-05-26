import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

const glsl = x => x[0];

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
 * 4. vec4: [value=0] to have same layout as flowmap
 *  	    3 placeholder
 */
class OffscreenRendererSeeds extends OffscreenRenderer {

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
        return 1;
    }

    addAdditionalUniforms() {
        this.uniforms["seed_direction"] = { type: 'vec3', value: new THREE.Vector3(0, 0, 0) };
        this.uniforms["seed_energy"] = { type: 'float', value: 1.0 };
    }

    setAdditionalUniforms() {
        this.dummy_plane_mesh.material.uniforms.seed_direction.value.x = this.simulationParameters.seed_direction_x;
        this.dummy_plane_mesh.material.uniforms.seed_direction.value.y = this.simulationParameters.seed_direction_y;
        this.dummy_plane_mesh.material.uniforms.seed_direction.value.z = this.simulationParameters.seed_direction_z;
        this.dummy_plane_mesh.material.uniforms.seed_energy.value = this.simulationParameters.seed_energy;
        
    }

    fragmentShaderMethodComputation() {
        return glsl`
            if(virtual_texture_y == 0){
                if(virtual_texture_x == 0)
                    outputColor = vec4(world_x, world_y, 0.0, 1.0);          
                if(virtual_texture_x == 1){
                    vec3 seed_velocity = normalize(seed_direction) * seed_energy;//TODO placeholder
                    outputColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, 1.0);
                }
            }
            else{
                outputColor = vec4(0.0, 0.0, 0.0, 0.0);         
            }
        `
    }

}

export { OffscreenRendererSeeds }