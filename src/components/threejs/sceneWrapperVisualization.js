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

import { ColorMaps } from "@/components/colormaps/colormaps"

/**
 * This class is responsible for the scene that shows the main visualization
 * 
 * Other SceneWrappers could for example visualize:
 * - a sphere where the user can select a direction
 * - a deformed sphere that visualizes equivalent energy
 */
class SceneWrapperVisualization {
    constructor(renderer, scene, camera, controls, raycaster, mode_constant_direction) {
        console.warn("CONSTRUCTOR SceneWrapperVisualization");
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.raycaster = raycaster;
        this.mode_constant_direction = mode_constant_direction;
        this.simulationParameters = new SimulationParameters();
        this.colorMaps = new ColorMaps();
        this.streamlineGenerator = new StreamlineGenerator(this.simulationParameters, scene);
        this.streamlineGenerator.initialize();
        this.offscreenRendererSeeds = new OffscreenRendererSeeds(renderer, this.simulationParameters, this.mode_constant_direction);
        this.offscreenRendererSeedsBackwards = new OffscreenRendererSeeds(renderer, this.simulationParameters, this.mode_constant_direction);
        this.offscreenRendererFlowMap = new OffscreenRendererFlowMap(renderer, this.simulationParameters, 1);
        this.offscreenRendererFlowMapBackwards = new OffscreenRendererFlowMap(renderer, this.simulationParameters, -1);
        this.OffscreenRendererFTLE = new OffscreenRendererFTLE(renderer, this.simulationParameters);
        this.OffscreenRendererFTLEBackwards = new OffscreenRendererFTLE(renderer, this.simulationParameters);
        this.offscreenRendererSeedsAndReturns = new OffscreenRendererSeedsAndReturns(renderer, this.simulationParameters);
        this.offscreenRendererSeedsAndReturnsBackwards = new OffscreenRendererSeedsAndReturns(renderer, this.simulationParameters);
        this.offscreenRendererGravitationalForce = new OffscreenRendererGravitationalForce(renderer, this.simulationParameters);

        this.offscreenRendererFlowMap.link(this.offscreenRendererSeedsAndReturns);
        this.offscreenRendererFlowMapBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards);
        this.OffscreenRendererFTLE.link(this.offscreenRendererSeedsAndReturns);
        this.OffscreenRendererFTLEBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards);
        this.offscreenRendererGravitationalForce.link(this.offscreenRendererSeedsAndReturns);

        this.offscreenRendererSeeds.initialize();
        this.offscreenRendererSeedsBackwards.initialize();
        this.offscreenRendererSeedsAndReturns.initialize();
        this.offscreenRendererSeedsAndReturnsBackwards.initialize();
        this.offscreenRendererFlowMap.initialize();
        this.offscreenRendererFlowMapBackwards.initialize();
        this.OffscreenRendererFTLE.initialize();
        this.OffscreenRendererFTLEBackwards.initialize();
        this.offscreenRendererGravitationalForce.initialize();

        this.textureRenderer = new TextureRenderer(renderer, this.simulationParameters, this.colorMaps, scene);

    }

    initialize() {
        this.initializeLight();
        this.initializeAxesArrows();
        this.initializePlane();
        this.initializeTexturedPlane();
        this.initializeClickedPositionMarker();
        this.initializeEventListeners();

        this.initializeAdditionalObjects();
    }

    initializeAdditionalObjects(){
        //define in child class
        console.error("initializeAdditionalObjects not defined");
    }

    initializeExampleCube() {

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.example_cube_mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.example_cube_mesh);
        //this.renderer.render(this.scene, this.camera);
    }

    initializeLight() {
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.set(0, 0, 0);
        this.camera.add(this.directionalLight);

        this.directionalLightTarget = new THREE.Object3D();
        this.camera.add(this.directionalLightTarget);
        this.directionalLightTarget.position.set(0, 0, -1);
        this.directionalLight.target = this.directionalLightTarget;

        const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
        this.scene.add(ambientLight);
    }

    initializeAxesArrows() {
        var position = vec3.fromValues(-4, -4, 0);
        var length = 8;
        var radius = 0.02;
        var cone_radius_factor = 5.0;
        var cone_fraction = 0.05;
        this.objectAxes = new ObjectAxes(position, length, length, length, radius, cone_radius_factor, cone_fraction);
        this.objectAxes.addToScene(this.scene);
    }

    initializePlane() {
        this.plane_geometry = new THREE.PlaneGeometry(256, 256);
        this.plane_material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        this.plane_material.transparent = true;
        this.plane_material.opacity = 0.5;
        this.plane_mesh = new THREE.Mesh(this.plane_geometry, this.plane_material);
        //this.scene.add(this.plane_mesh);
    }

    initializeTexturedPlane() {
        this.textureRenderer.initialize();
    }

    initializeClickedPositionMarker() {
        var radius = 1.0;
        this.clicked_geometry = new THREE.SphereGeometry(radius);
        this.clicked_material = new THREE.MeshStandardMaterial({ color: 0x000000 });
        this.clicked_mesh = new THREE.Mesh(this.clicked_geometry, this.clicked_material);
        this.clicked_mesh.position.set(0, 0, 10000);
        this.scene.add(this.clicked_mesh);

        this.return_1_geometry = new THREE.SphereGeometry(radius);
        this.return_1_material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
        this.return_1_mesh = new THREE.Mesh(this.return_1_geometry, this.return_1_material);
        this.return_1_mesh.position.set(0, 0, 10000);
        this.scene.add(this.return_1_mesh);

        this.return_2_geometry = new THREE.SphereGeometry(radius);
        this.return_2_material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
        this.return_2_mesh = new THREE.Mesh(this.return_2_geometry, this.return_2_material);
        this.return_2_mesh.position.set(0, 0, 10000);
        this.scene.add(this.return_2_mesh);
    }

    initializeEventListeners() {
        this.renderer.domElement.addEventListener("click", (event) => {

            if (this.simulationParameters.activeBehavior == Constants.BEHAVIOR_CONTROL_CAMERA) {
                //do nothing --> controls takes care of camera stuff 
                return;
            }

            var mousePositionNDC = getMousePositionInCanvasNDC(this.renderer.domElement, event);
            this.rayCastAndMovePosition(mousePositionNDC);
        },
            false
        );

        this.renderer.domElement.addEventListener("mousemove", (event) => {

            if (this.simulationParameters.activeBehavior == Constants.BEHAVIOR_CONTROL_CAMERA) {
                //do nothing --> controls takes care of camera stuff 
                return;
            }

            //check if the left mouse button is held down while moving
            if (event.buttons & 1) {
                this.clickedMousePositionNDC = getMousePositionInCanvasNDC(this.renderer.domElement, event);
                this.newClickedPosition = true;
            } else {
                //currently do nothing if the left mouse is not held down
            }
        },
            false
        );
    }

    getTexturedPlaneMinX(){
        //define in child class
        console.error("getTexturedPlaneMinX not defined");
    }

    getTexturedPlaneMaxX(){
        //define in child class
        console.error("getTexturedPlaneMaxX not defined");
    }

    getTexturedPlaneMinY(){
        //define in child class
        console.error("getTexturedPlaneMinY not defined");
    }

    getTexturedPlaneMaxY(){
        //define in child class
        console.error("getTexturedPlaneMaxY not defined");
    }

    getDefaultCameraDistance(){
        //define in child class
        console.error("getTexturedPlaneMaxY not defined");
    }

    rayCastAndMovePosition(mousePositionNDC){
        
        //console.log("CLICK NDC:", mousePositionNDC.x, mousePositionNDC.y);
        var mouse = new THREE.Vector2();
        mouse.x = mousePositionNDC.x;
        mouse.y = mousePositionNDC.y;
        this.raycaster.setFromCamera(mouse, this.camera);
        const intersects = this.raycaster.intersectObject(this.plane_mesh);
        if (intersects.length > 0) {
            //console.log("plane intersection", intersects[0].point);
            this.clicked_mesh.position.set(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
            this.recalculateStreamlineAtPosition(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
        }
        else {
            //console.log("no plane intersection");
            this.clicked_mesh.position.set(0, 0, 10000);
        }
    }






    updateParametersData(mu, angular_velocity, use_constant_velocity, seed_energy, seed_direction_x, seed_direction_y, seed_direction_z, seed_position_x, seed_position_y, step_size, max_steps, termination_method, domain_min_x, domain_max_x, domain_pixels_x, domain_min_y, domain_max_y, domain_pixels_y) {
        this.simulationParameters.mu = parseFloat(mu);
        this.simulationParameters.angular_velocity = parseFloat(angular_velocity);
        this.simulationParameters.use_constant_velocity = use_constant_velocity;
        this.simulationParameters.seed_energy = parseFloat(seed_energy);
        this.simulationParameters.seed_direction_x = parseFloat(seed_direction_x);
        this.simulationParameters.seed_direction_y = parseFloat(seed_direction_y);
        this.simulationParameters.seed_direction_z = parseFloat(seed_direction_z);
        this.simulationParameters.seed_position_x = parseFloat(seed_position_x);
        this.simulationParameters.seed_position_y = parseFloat(seed_position_y);

        this.simulationParameters.step_size = parseFloat(step_size);
        this.simulationParameters.max_steps = parseInt(max_steps);        
        this.simulationParameters.termination_method = parseInt(termination_method);

        this.simulationParameters.domain_min_x = parseFloat(domain_min_x);    
        this.simulationParameters.domain_max_x = parseFloat(domain_max_x);    
        this.simulationParameters.domain_dimension_x = this.simulationParameters.domain_max_x - this.simulationParameters.domain_min_x;    
        this.simulationParameters.domain_pixels_x = parseFloat(domain_pixels_x);    
        this.simulationParameters.domain_min_y = parseFloat(domain_min_y);    
        this.simulationParameters.domain_max_y = parseFloat(domain_max_y);    
        this.simulationParameters.domain_dimension_y = this.simulationParameters.domain_max_y - this.simulationParameters.domain_min_y;  
        this.simulationParameters.domain_pixels_y = parseFloat(domain_pixels_y);
    }

    updateParametersRendering(max_radius_bodies, radius_center_of_mass, radius_clicked_position, rendering_ftle_type, rendering_texture_mode, rendering_specialized_mode, return_number, rendering_forward, rendering_raw_mode, rendering_raw_mode_layer, rendering_raw_mode_x_texture_index, rendering_raw_mode_y_texture_index, scalar_min, scalar_max, opacity, tube_segment_length, tube_max_segments, tube_num_sides, tube_radius, tube_only_show_successful_returns) {
        this.simulationParameters.max_radius_bodies = max_radius_bodies;
        this.simulationParameters.radius_center_of_mass = radius_center_of_mass;
        this.simulationParameters.radius_clicked_position = radius_clicked_position;
        this.simulationParameters.rendering_ftle_type = parseInt(rendering_ftle_type);
        this.simulationParameters.rendering_texture_mode = parseInt(rendering_texture_mode);
        this.simulationParameters.rendering_specialized_mode = parseInt(rendering_specialized_mode);
        this.simulationParameters.return_layer = parseInt(return_number);//currently return layer is equivalent to return number      
        this.simulationParameters.rendering_forward = rendering_forward;
        this.simulationParameters.rendering_raw_mode = parseInt(rendering_raw_mode);
        this.simulationParameters.rendering_raw_mode_layer = parseInt(rendering_raw_mode_layer);
        this.simulationParameters.rendering_raw_mode_x_texture_index = parseInt(rendering_raw_mode_x_texture_index);
        this.simulationParameters.rendering_raw_mode_y_texture_index = parseInt(rendering_raw_mode_y_texture_index);        

        this.simulationParameters.scalar_min = parseFloat(scalar_min);
        this.simulationParameters.scalar_max = parseFloat(scalar_max);
        this.simulationParameters.opacity = parseFloat(opacity);      
        
        this.simulationParameters.tube_segment_length = parseFloat(tube_segment_length); 
        this.simulationParameters.tube_max_segments = parseInt(tube_max_segments); 
        this.simulationParameters.tube_num_sides = parseInt(tube_num_sides); 
        this.simulationParameters.tube_radius = parseFloat(tube_radius); 
        this.simulationParameters.tube_only_show_successful_returns = tube_only_show_successful_returns;         
    }

    updateParametersActiveBehavior(activeBehavior){
        this.simulationParameters.activeBehavior = activeBehavior;        
    }

    computeStuff(){
        this.offscreenRendererSeeds.updateTexturedPlane();
        this.offscreenRendererSeeds.compute();
        this.offscreenRendererSeedsAndReturns.updateTexturedPlane();
        this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererSeeds.renderTarget.texture, 0);

        //this.offscreenRendererSeedsBackwards.updateTexturedPlane();
        //this.offscreenRendererSeedsBackwards.compute();
        this.offscreenRendererSeedsAndReturnsBackwards.updateTexturedPlane();
        this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererSeeds.renderTarget.texture, 0);



        this.offscreenRendererFlowMap.updateTexturedPlane();
        this.offscreenRendererFlowMap.computeTargetLayerAt0(1);
        this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture, 1);   
        this.OffscreenRendererFTLE.updateTexturedPlane();     
        this.OffscreenRendererFTLE.computeTargetLayerAt0(1);
        this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture, 1);

        this.offscreenRendererFlowMapBackwards.updateTexturedPlane();
        this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(1);
        this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture, 1);   
        this.OffscreenRendererFTLEBackwards.updateTexturedPlane();     
        this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(1);
        this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture, 1);


        if(this.simulationParameters.termination_method != Constants.TERMINATION_METHOD_FIRST_RETURN){
            this.offscreenRendererFlowMap.computeTargetLayerAt0(2);
            this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture, 2); 
            this.OffscreenRendererFTLE.computeTargetLayerAt0(2);
            this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture, 2);
    
            this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(2);
            this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture, 2); 
            this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(2);
            this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture, 2);
        }
        
        this.offscreenRendererGravitationalForce.updateTexturedPlane();
        this.offscreenRendererGravitationalForce.compute();
    }

    updateTexturedPlane(){
        var min_x = this.getTexturedPlaneMinX();
        var max_x = this.getTexturedPlaneMaxX();
        var min_y = this.getTexturedPlaneMinY();
        var max_y = this.getTexturedPlaneMaxY();
        var scale_x = max_x - min_x;
        var scale_y = max_y - min_y;
        var pos_x = 0.5 * (min_x + max_x);
        var pos_y = 0.5 * (min_y + max_y);

        this.textureRenderer.updateTransform(pos_x, pos_y, scale_x, scale_y);
        this.changeDisplayedTexture();
        this.textureRenderer.updateTexturedPlane();
    }

    updateAxes(){
        //define in child class
        console.error("loadScene not defined");
    }

    alignCameraWithDomain(camera, controls, min_x, max_x, min_y, max_y){
        var min_x = this.getTexturedPlaneMinX();
        var max_x = this.getTexturedPlaneMaxX();
        var min_y = this.getTexturedPlaneMinY();
        var max_y = this.getTexturedPlaneMaxY();

        var x = 0.5 * (min_x + max_x);
        var y = 0.5 * (min_y + max_y);

        camera.position.set(x, y, this.getDefaultCameraDistance());
        controls.target.set(x, y, 0);
        camera.up.set(0, 1, 0);
        console.log(camera.position);
    }

    changeDisplayedTexture(){
        this.textureRenderer.changeDisplayedTextureBackwards(this.offscreenRendererSeedsAndReturnsBackwards.renderTarget.texture);
        switch (this.simulationParameters.rendering_texture_mode) {
            case Constants.TEXTURE_MODE_SPECIALIZED:
                this.changeDisplayedTextureSpecialized();
                break;
            case Constants.TEXTURE_MODE_RAW_VIRTUAL:
                this.changeDisplayedTextureRaw();
                break;
            case Constants.TEXTURE_MODE_RAW_TEXTURE:
                this.changeDisplayedTextureRaw();
                break;
            default:
                console.error("Error: Unknown rendering_texture_mode", this.simulationParameters.rendering_texture_mode);
                break;
        }
    }

    changeDisplayedTextureSpecialized(){
        var offscreenRenderer;
        switch (this.simulationParameters.rendering_specialized_mode) {
            case Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE:
                offscreenRenderer = this.offscreenRendererGravitationalForce;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE_MAGNITUDE:
                offscreenRenderer = this.offscreenRendererGravitationalForce;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_ADVECTION_TIME:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_ARC_LENGTH:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_POSITION:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE_MAGNITUDE:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_DIRECTION:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_FTLE:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_FTLE_BOTH:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;
            case Constants.TEXTURE_MODE_SPECIALIZED_RETURN_SUCCESS:
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;                
            default:
                console.error("Error: Unknown rendering_specialized_mode", this.simulationParameters.rendering_specialized_mode);
                break;
        }
        this.textureRenderer.changeDisplayedTexture(offscreenRenderer.renderTarget.texture);
    }

    changeDisplayedTextureRaw(){
        var offscreenRenderer;
        offscreenRenderer = this.offscreenRendererSeeds;
        
        switch (this.simulationParameters.rendering_raw_mode) {
            case Constants.OFFSCREEN_RENDERER_SEEDS:
                offscreenRenderer = this.offscreenRendererSeeds;
                break;
            case Constants.OFFSCREEN_RENDERER_GRAVITATIONAL_FORCE:
                offscreenRenderer = this.offscreenRendererGravitationalForce;
                break;            
            case Constants.OFFSCREEN_RENDERER_FLOW_MAP:
                offscreenRenderer = this.offscreenRendererFlowMap;
                break;       
            case Constants.OFFSCREEN_RENDERER_SEEDS_AND_RETURNS:                   
                offscreenRenderer = this.offscreenRendererSeedsAndReturns;
                break;      
            default:
                console.error("Error: Unknown rendering_raw_mode", this.simulationParameters.rendering_raw_mode);
                break;
        }
        this.textureRenderer.changeDisplayedTexture(offscreenRenderer.renderTarget.texture);
    }

    updateClickedPosition() {
        var radius = this.simulationParameters.getClickedPositionRadius();
        this.clicked_mesh.scale.set(radius, radius, radius);
        this.return_1_mesh.scale.set(radius, radius, radius);
        this.return_2_mesh.scale.set(radius, radius, radius);
    }

    recalculateStreamlineAtPosition(pos_x, pos_y, pos_z){
        var dir_x = this.simulationParameters.seed_direction_x;
        var dir_y = this.simulationParameters.seed_direction_y;
        var dir_z = this.simulationParameters.seed_direction_z;
        var energy = this.simulationParameters.seed_energy;            
        this.streamlineGenerator.recalculateMulti(0, pos_x, pos_y, pos_z, dir_x, dir_y, dir_z, energy);
        this.streamlineGenerator.updateMultiModel(0);
        this.repositionReturnSpheres();
    }

    recalculateStreamlineKeepPosition(){
        var dir_x = this.simulationParameters.seed_direction_x;
        var dir_y = this.simulationParameters.seed_direction_y;
        var dir_z = this.simulationParameters.seed_direction_z;
        var energy = this.simulationParameters.seed_energy;            
        this.streamlineGenerator.recalculateMultiKeepPosition(0, dir_x, dir_y, dir_z, energy);
        this.streamlineGenerator.updateMultiModel(0);
        this.repositionReturnSpheres();
    }

    recalculateStreamlineWithLastParameters(){    
        this.streamlineGenerator.recalculateMultiWithLastParameters(0);
        this.streamlineGenerator.updateMultiModel(0);
        this.repositionReturnSpheres();
    }

    updateStreamlineModel(){
        this.streamlineGenerator.updateMultiModel(0);
    }

    repositionReturnSpheres(){
        
        if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length > 0){
            var point_data = this.streamlineGenerator.list_multi[0].list_point_data_returns[0];
            this.return_1_mesh.position.set(point_data.position[0], point_data.position[1], 0);
        }
        else{
            this.return_1_mesh.position.set(0, 0, 10000);
        }
        if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length > 1){
            var point_data = this.streamlineGenerator.list_multi[0].list_point_data_returns[1];
            this.return_2_mesh.position.set(point_data.position[0], point_data.position[1], 0);
        }
        else{
            this.return_2_mesh.position.set(0, 0, 10000);
        }
        
    }

    updateBehavior() {
        if(this.simulationParameters.activeBehavior == this.simulationParameters.activeBehaviorLastFrame){
            return;
        }
        this.simulationParameters.activeBehaviorLastFrame = this.simulationParameters.activeBehavior;
        //console.warn("behavior changed", this.simulationParameters.activeBehavior);
        if(this.simulationParameters.activeBehavior == Constants.BEHAVIOR_CONTROL_CAMERA){
            this.controls.noRotate = false;
        }
        if(this.simulationParameters.activeBehavior == Constants.BEHAVIOR_MOVE_SEED){
            this.controls.noRotate = true;
        }
    }

    preRender(){
        if(this.newClickedPosition){
            this.newClickedPosition = false;            
            this.rayCastAndMovePosition(this.clickedMousePositionNDC);
        }
    }
}

export { SceneWrapperVisualization };