import * as THREE from "three";
import { ObjectArrow, ObjectAxes } from "./custom_objects";
import { vec3 } from "gl-matrix/esm";
import { SimulationParameters } from "@/components/logic/simulation_parameters";
import { getMousePositionInCanvasNDC } from "@/components/utility/mouseHelper";
import * as Constants from "@/components/utility/constants";
import { OffscreenRendererSeedsAndReturns} from "./offscreen_renderer_seeds_and_returns";
import { OffscreenRendererSeeds} from "./offscreen_renderer_seeds";
import { OffscreenRendererFlowMap } from "./offscreen_renderer_flow_map";
import { OffscreenRendererFTLE } from "./offscreen_renderer_ftle";
import { OffscreenRendererGravitationalForce} from "./offscreen_renderer_gravitational_force";
import { TextureRenderer } from "@/components/threejs/texture_renderer";
import { StreamlineGenerator } from "@/components/threejs/streamline_generator";
import { SceneWrapperVisualization } from "@/components/threejs/sceneWrapperVisualization";

import { ColorMaps } from "@/components/colormaps/colormaps"

/**
 * This class is responsible for the scene that shows the main visualization
 * 
 * Other SceneWrappers could for example visualize:
 * - a sphere where the user can select a direction
 * - a deformed sphere that visualizes equivalent energy
 */
class SceneWrapperVisualizationAux extends SceneWrapperVisualization{
    constructor(renderer, scene, camera, controls, raycaster) {
        super(renderer, scene, camera, controls, raycaster, false);
        console.warn("CONSTRUCTOR SceneWrapperVisualizationAux");
    }

    updateTexturedPlane(){
        var min_x = 0;
        var max_x = 1;
        var min_y = 0;
        var max_y = 1;
        var scale_x = max_x - min_x;
        var scale_y = max_y - min_y;
        var pos_x = 0.5 * (min_x + max_x);
        var pos_y = 0.5 * (min_y + max_y);

        this.textureRenderer.updateTransform(pos_x, pos_y, scale_x, scale_y);
        this.changeDisplayedTexture();
        this.textureRenderer.updateTexturedPlane();
    }

    updateAxes(){
        var has_z = false;
        var min_x = 0;
        var max_x = 1;
        var min_y = 0;
        var max_y = 1;    
        var radius = 0.002;
        var color1 = 0x00ffff;
        var color2 = 0xff00ff;
        var color3 = 0x000000;
        this.objectAxes.rebuild(has_z, this.scene, this.simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3);
    }
}

export { SceneWrapperVisualizationAux };