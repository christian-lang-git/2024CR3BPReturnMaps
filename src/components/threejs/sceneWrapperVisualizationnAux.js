import * as THREE from "three";
import { ObjectArrow, ObjectAxes, SpherelikeGrid } from "./custom_objects";
import { vec3 } from "gl-matrix/esm";
import { SimulationParameters } from "@/components/logic/simulation_parameters";
import { getMousePositionInCanvasNDC } from "@/components/utility/mouseHelper";
import * as Constants from "@/components/utility/constants";
import { OffscreenRendererSeedsAndReturns} from "./offscreen_renderer_seeds_and_returns";
import { OffscreenRendererSeeds} from "./offscreen_renderer_seeds";
import { OffscreenRendererFlowMap } from "./offscreen_renderer_flow_map";
import { OffscreenRendererFTLE } from "./offscreen_renderer_ftle";
import { OffscreenRendererGravitationalForce} from "./offscreen_renderer_gravitational_force";
import { TextureRendererSphere } from "@/components/threejs/texture_renderer_sphere";
import { StreamlineGenerator } from "@/components/threejs/streamline_generator";
import { SceneWrapperVisualization } from "@/components/threejs/sceneWrapperVisualization";

import { ColorMaps } from "@/components/colormaps/colormaps"
import Emitter from '@/components/utility/emitter';
import { clamp } from "@/components/utility/utility";

/**
 * This class is responsible for the scene that shows the main visualization
 * 
 * Other SceneWrappers could for example visualize:
 * - a sphere where the user can select a direction
 * - a deformed sphere that visualizes equivalent energy
 */
class SceneWrapperVisualizationAux extends SceneWrapperVisualization{
    constructor(renderer, scene, camera, controls, raycaster, scene_sphere, camera_sphere, controls_sphere) {
        super(renderer, scene, camera, controls, raycaster, false, true);
        console.warn("CONSTRUCTOR SceneWrapperVisualizationAux");
        this.scene_sphere = scene_sphere;
        this.camera_sphere = camera_sphere;
        this.controls_sphere = controls_sphere;
        var useAnglePlane = true;
        this.textureRendererSphere = new TextureRendererSphere(renderer, this.simulationParameters, this.colorMaps, this.scene_sphere, useAnglePlane);
    }

    initializeAdditionalObjects(){
        this.initializeAxesArrowsSpheres();
        this.initializeSpherelikeGrid();
        this.initializeClickedPositionMarkerSphericalGrid();
    }

    getTexturedPlaneMinX(){
        return 0;
    }

    getTexturedPlaneMaxX(){
        return 1;
    }

    getTexturedPlaneMinY(){
        return 0;
    }

    getTexturedPlaneMaxY(){
        return 1;
    }

    getDefaultCameraDistance(){
        return 0.75;
    }

    updateVisualElements(){
        this.updateClickedPosition();   
        this.updateStreamlineModel();  
        this.updateTexturedPlane();
        this.updateTexturedSphere();
        this.updateAxes();
    }

    updateTexturedSphere(){
        var min_x = this.getTexturedPlaneMinX();
        var max_x = this.getTexturedPlaneMaxX();
        var min_y = this.getTexturedPlaneMinY();
        var max_y = this.getTexturedPlaneMaxY();
        var scale_x = max_x - min_x;
        var scale_y = max_y - min_y;
        var pos_x = 0.5 * (min_x + max_x);
        var pos_y = 0.5 * (min_y + max_y);

        this.changeDisplayedTexture(this.textureRendererSphere);
        this.textureRendererSphere.updateTexturedMesh();
    }

    updateAxes(){
        var has_z = false;
        var z_factor = 0.5;
        var min_x = 0;
        var max_x = 1;
        var min_y = 0;
        var max_y = 1;    
        var radius = 0.002;
        var color1 = 0x00ffff;
        var color2 = 0xff00ff;
        var color3 = 0x000000;
        this.objectAxes.rebuild(has_z, z_factor, this.scene, this.simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3);
    }

    //for sphere sceen
    initializeLightSpheres() {
        this.directionalLight_sphere = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight_sphere.position.set(0, 0, 0);
        this.camera_sphere.add(this.directionalLight_sphere);

        this.directionalLightTarget_sphere = new THREE.Object3D();
        this.camera_sphere.add(this.directionalLightTarget_sphere);
        this.directionalLightTarget_sphere.position.set(0, 0, -1);
        this.directionalLight_sphere.target = this.directionalLightTarget_sphere;

        const ambientLight_sphere = new THREE.AmbientLight(0x404040); // soft white light
        this.scene_sphere.add(ambientLight_sphere);
    }

    //for sphere sceen
    initializeAxesArrowsSpheres() {
        var position = vec3.fromValues(-4, -4, 0);
        var length = 8;
        var radius = 0.02;
        var cone_radius_factor = 5.0;
        var cone_fraction = 0.05;
        this.objectAxes_spheres = new ObjectAxes(position, length, length, length, radius, cone_radius_factor, cone_fraction);
        this.objectAxes_spheres.addToScene(this.scene_sphere);

        
        var has_z = true;
        var z_factor = 1;
        var min_x = 0;
        var max_x = 1.25;
        var min_y = 0;
        var max_y = 1.25;        
        var radius = 0.002;
        var color1 = 0xff0000;
        var color2 = 0x00ff00;
        var color3 = 0x0000ff;
        this.objectAxes_spheres.rebuild(has_z, z_factor, this.scene_sphere, this.simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3);
    }

    initializeSpherelikeGrid(){
        this.textureRendererSphere.initialize();
    }

    initializeClickedPositionMarkerSphericalGrid(){
        var radius = 1.0;
        this.clicked_geometry_spherical_view = new THREE.SphereGeometry(radius);
        this.clicked_material_spherical_view = new THREE.MeshStandardMaterial({ color: 0x000000 });
        this.clicked_mesh_spherical_view = new THREE.Mesh(this.clicked_geometry_spherical_view, this.clicked_material_spherical_view);
        this.clicked_mesh_spherical_view.position.set(0, 0, 10000);
        this.scene_sphere.add(this.clicked_mesh_spherical_view);
    }

    computeAdditionalStuff(){
        var subdivide = false;
        this.textureRendererSphere.spherelikeGrid.updateGrid(subdivide ,this.offscreenRendererSeedsAndReturns.getPlaneDimensionX(), this.offscreenRendererSeedsAndReturns.getPlaneDimensionY());
    }

    rayCastAndMovePosition(mousePositionNDC){  
        var mouse = new THREE.Vector2();
        mouse.x = mousePositionNDC.x;
        mouse.y = mousePositionNDC.y;

        if(this.simulationParameters.active_aux_scene_index == Constants.AUX_CONTENT_DEFAULT){
            this.raycaster.setFromCamera(mouse, this.camera);
            const intersects = this.raycaster.intersectObject(this.plane_mesh);
            if (intersects.length > 0) {
                var x_frac = clamp(intersects[0].point.x, 0, 1);
                var y_frac = clamp(intersects[0].point.y, 0, 1);
                this.simulationParameters.setSeedDirectionAnglesFromFrac(x_frac, y_frac);
                Emitter.emit(Constants.EVENT_SEED_DIRECTION_CHANGED,{});
            }
        }else{//Constants.AUX_CONTENT_SPHERE
            this.raycaster.setFromCamera(mouse, this.camera_sphere);
            const intersects = this.raycaster.intersectObject(this.textureRendererSphere.spherelikeGrid.mesh);
            if (intersects.length > 0) {
                console.log("spherelikeGrid intersection", intersects[0].point);
                this.simulationParameters.setSeedDirection(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
                Emitter.emit(Constants.EVENT_SEED_DIRECTION_CHANGED,{});
            }
        }

    }

    recalculateStreamlineFromSimulationParameters(){
        //DO NOTHING
    }

    repositionSeedSpheres(){        
        this.clicked_mesh_spherical_view.position.set(this.simulationParameters.seed_direction_x, this.simulationParameters.seed_direction_y, this.simulationParameters.seed_direction_z);
        this.clicked_mesh.position.set(this.simulationParameters.seed_direction_theta_frac, this.simulationParameters.seed_direction_phi_frac, 0);
    }

    OnSeedPositionChanged(){
        console.warn("OnSeedPositionChanged");
        this.seed_changed = true;
    }
}

export { SceneWrapperVisualizationAux };