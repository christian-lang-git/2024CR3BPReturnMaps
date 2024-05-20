import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

/**
 * TODO
 * The resulting texture stores positions and velocities of the seeds:
 * 
 * size 2*domain_pixel_x, 1*domain_pixel_y
 * 
 * --> 2 vec4 per grid node
 * 
 * 1. vec4: 3 floats for position (do not use the z coordinate for something else, this way it has the same format as flow map)
 * 2. vec4: 3 floats for velocity
 */
class OffscreenRendererSeeds extends OffscreenRenderer {

    constructor(renderer, simulationParameters) {
        super(renderer, simulationParameters)
    }

    getNumPixelsPerNodeX() {
        return 2;
    }

    getNumPixelsPerNodeY() {
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
        return `
            if(virtual_texture_x == 0)
                gl_FragColor = vec4(world_x, world_y, 0.0, x_pixel);          
            if(virtual_texture_x == 1){
                vec3 seed_velocity = vec3(seed_direction) * seed_energy;//TODO placeholder
                gl_FragColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, y_pixel);
            }
        `
    }

}

export { OffscreenRendererSeeds }