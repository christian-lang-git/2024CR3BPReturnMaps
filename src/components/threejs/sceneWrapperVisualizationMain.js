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
class SceneWrapperVisualizationMain extends SceneWrapperVisualization{
    constructor(renderer, scene, camera, controls, raycaster) {
        super(renderer, scene, camera, controls, raycaster, true);
        console.warn("CONSTRUCTOR SceneWrapperVisualizationMain");
    }

    initializeAdditionalObjects(){
        this.initializeBodies();
    }

    /**
    * Generates the 3 spheres with radius 1
    */
    initializeBodies() {
        var radius = 1.0;

        this.primary_geometry = new THREE.SphereGeometry(radius);
        this.primary_material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.primary_mesh = new THREE.Mesh(this.primary_geometry, this.primary_material);
        this.primary_mesh.position.set(1, 0, 0);
        this.scene.add(this.primary_mesh);

        this.secondary_geometry = new THREE.SphereGeometry(radius);
        this.secondary_material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        this.secondary_mesh = new THREE.Mesh(this.secondary_geometry, this.secondary_material);
        this.secondary_mesh.position.set(-1, 0, 0);
        this.scene.add(this.secondary_mesh);

        this.center_geometry = new THREE.SphereGeometry(radius);
        this.center_material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        this.center_mesh = new THREE.Mesh(this.center_geometry, this.center_material);
        this.center_mesh.position.set(0, 0, 0);
        this.scene.add(this.center_mesh);
    }

    getTexturedPlaneMinX(){
        return this.simulationParameters.domain_min_x;
    }

    getTexturedPlaneMaxX(){
        return this.simulationParameters.domain_max_x;
    }

    getTexturedPlaneMinY(){
        return this.simulationParameters.domain_min_y;
    }

    getTexturedPlaneMaxY(){
        return this.simulationParameters.domain_max_y;
    }

    getDefaultCameraDistance(){
        return 11;
    }

    updateVisualElements(){
        this.updateBodies();
        this.updateClickedPosition();   
        this.updateStreamlineModel();  
        this.updateTexturedPlane();
        this.updateAxes();
    }

    updateBodies() {
        //scale
        var radius = this.simulationParameters.getPrimaryRadius();
        this.primary_mesh.scale.set(radius, radius, radius);
        var radius = this.simulationParameters.getSecondaryRadius();
        this.secondary_mesh.scale.set(radius, radius, radius);
        var radius = this.simulationParameters.getCenterOfMassRadius();
        this.center_mesh.scale.set(radius, radius, radius);

        //position
        this.primary_mesh.position.set(this.simulationParameters.getPrimaryX(), 0, 0);
        this.secondary_mesh.position.set(this.simulationParameters.getSecondaryX(), 0, 0);
    }

    updateTexturedPlane(){
        var min_x = this.simulationParameters.domain_min_x;
        var max_x = this.simulationParameters.domain_max_x;
        var min_y = this.simulationParameters.domain_min_y;
        var max_y = this.simulationParameters.domain_max_y;
        var scale_x = max_x - min_x;
        var scale_y = max_y - min_y;
        var pos_x = 0.5 * (min_x + max_x);
        var pos_y = 0.5 * (min_y + max_y);

        this.textureRenderer.updateTransform(pos_x, pos_y, scale_x, scale_y);
        this.changeDisplayedTexture();
        this.textureRenderer.updateTexturedPlane();
    }

    updateAxes(){
        var has_z = true;
        var min_x = this.simulationParameters.domain_min_x;
        var max_x = this.simulationParameters.domain_max_x;
        var min_y = this.simulationParameters.domain_min_y;
        var max_y = this.simulationParameters.domain_max_y;        
        var radius = 0.02;
        var color1 = 0xff0000;
        var color2 = 0x00ff00;
        var color3 = 0x0000ff;
        this.objectAxes.rebuild(has_z, this.scene, this.simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3);
    }
}

export { SceneWrapperVisualizationMain };