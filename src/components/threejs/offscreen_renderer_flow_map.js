import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

/**
 * TODO
 * The resulting texture stores first and second return positions and directions as well as advection time and arc length for both returns:
 * 
 * size 2*domain_pixel_x, 2*domain_pixel_y
 * 
 * --> 4 vec4 per grid node
 * 
 * 1. vec4: 3 floats for first end position (in case we do not terminate on the plane)
 *          1 float for advection time
 * 2. vec4: 3 floats for first end direction
 *          1 float for arc length
 * 3. vec4: 3 floats for second end position (in case we do not terminate on the plane)
 *          1 float for advection time
 * 4. vec4: 3 floats for second end direction
 *          1 float for arc length
 */
class OffscreenRendererFlowMap extends OffscreenRenderer{

    constructor(renderer, simulationParameters) {
        super(renderer, simulationParameters)
    }

    getNumPixelsPerNodeX(){
        return 1;
    }

    getNumPixelsPerNodeY(){
        return 1;
    }

    generateUniforms() {
        this.uniforms = {
            planeCenter: { type: 'vec2', value: new THREE.Vector2(0,0) },
            planeCornerBL: { type: 'vec2', value: new THREE.Vector2(-1,-1) },
            planeDimensions: { type: 'vec2', value: new THREE.Vector2(2,2) },
            planeDimensionsPixel: { type: 'vec2', value: new THREE.Vector2(100,100) }
        }
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
                gl_FragColor = vec4(0.42, 7.0, -10.0, 9999.0);
            }

            if(x_coord > -0.1 && x_coord < 0.1 && y_coord > -0.1 && y_coord < 0.1){
                gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
            }
        }    
        `
    }

}

export { OffscreenRendererFlowMap }