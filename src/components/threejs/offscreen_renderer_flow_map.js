import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";
import { OffscreenRenderer } from "@/components/threejs/offscreen_renderer"

/**
 * TODO
 * This class computes a single return map.
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
class OffscreenRendererFlowMap extends OffscreenRenderer{

    constructor(renderer, simulationParameters) {
        super(renderer, simulationParameters)
    }

    getNumPixelsPerNodeX(){
        return 2;
    }

    getNumPixelsPerNodeY(){
        return 2;
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
        out vec4 outputColor;
  
        void main() {
            //coordinates in pixel starting bottom left
            float x_pixel = gl_FragCoord[0];//x
            float y_pixel = gl_FragCoord[1];//y
            float x_coord = planeCornerBL.x + (x_pixel / planeDimensionsPixel.x) * planeDimensions.x;
            float y_coord = planeCornerBL.y + (y_pixel / planeDimensionsPixel.y) * planeDimensions.y;

            if(x_pixel>50.0){
                outputColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
            else{
                outputColor = vec4(0.0, 1.0, 0.0, 1.0);
            }
            if(y_pixel>75.0){
                outputColor = vec4(0.0, 0.0, 1.0, 1.0);
            }

            if(x_pixel < 1.0){
                outputColor = vec4(0.42, 7.0, -10.0, 9999.0);
            }

            if(x_coord > -0.1 && x_coord < 0.1 && y_coord > -0.1 && y_coord < 0.1){
                outputColor = vec4(1.0, 0.0, 1.0, 1.0);
            }
        }    
        `
    }

}

export { OffscreenRendererFlowMap }