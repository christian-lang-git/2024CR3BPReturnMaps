import React, { Component } from "react";
import * as THREE from "three";
//import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

import Emitter from '../utility/emitter';
import * as Constants from "../utility/constants";
import { AppContext } from "@/components/uicustom/AppContext"

class ThreeContainer extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        console.warn("CONSTRUCTOR ThreeContainer");
    }

    componentDidMount() {
        console.warn("ThreeScene::componentDidMount");
        this.list_cameras = [];
        this.list_controls = [];

        this.initializeScene();
        this.initializeRenderer();
        this.initializeCamera();
        this.initializeControls();
        this.initializeRayCaster();
        this.initializeEventHandlers();

        this.initializeAdditional();

        this.loadScene();

        this.updateCanvasSize();
        this.updateControls();
        this.updateParameters();
        this.computeStuff();
        this.updateVisualElements();
        this.alignCameraWithDomain();
        this.renderLoop();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      INITIALIZATION
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    initializeScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        //this.scene.background = new THREE.Color( 0x000000 );//background color for debugging layout

        this.active_scene = this.scene;
    }

    initializeRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(10, 10);
        this.mount.appendChild(this.renderer.domElement);
    }

    initializeCamera() {
        this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.01, 100);
        this.camera.position.z = 11;
        this.scene.add(this.camera);

        this.active_camera = this.camera;

        this.list_cameras.push(this.camera);
    }

    initializeControls() {
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.update();

        this.active_controls = this.controls;
        
        this.list_controls.push(this.controls);
    }

    initializeRayCaster() {
        this.raycaster = new THREE.Raycaster();
    }

    initializeEventHandlers() {
        window.addEventListener("resize", this.handleResize);
        Emitter.on(Constants.EVENT_RESIZE_PANEL, this.handleResize);    
        Emitter.on(Constants.EVENT_CAMERA_UPDATE, this.handleEventCameraUpdate); 
    }

    initializeAdditional() {
        //define in child class  
        console.error("initializeAdditional not defined");
    }

    /**
     * generates and initializes a SceneWrapper "this.sceneWrapper"
     */
    loadScene() {
        //define in child class
        console.error("loadScene not defined");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      EVENT HANDLERS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleResize = () => {
        console.log("handleResize");
        this.updateCanvasSize();
    }

    handleEventCameraUpdate = () => {
        console.log("handleEventCameraUpdate");
        this.updateControls();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      UPDATE FUNCTIONS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateCanvasSize() {
        var canvas = this.renderer.domElement;
        var canvas_parent = this.renderer.domElement.parentElement;
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        var width = canvas_parent.clientWidth;
        var height = canvas_parent.clientHeight;

        for(var i=0; i<this.list_cameras.length; i++){
            var camera = this.list_cameras[i];
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        for(var i=0; i<this.list_controls.length; i++){
            var controls = this.list_controls[i];
            controls.handleResize();
            controls.update();
        }



        this.renderer.setSize(width, height, false);
        this.renderer.render(this.active_scene, this.active_camera);
        console.warn("RESIZE")
    }

    updateControls() {
        this.updateControlsInstance(this.controls);
    }

    updateControlsInstance(controls) {
        const { uiState } = this.context;
        controls.rotateSpeed = uiState.UI_STATE_CAMERA_CONTROLS_ROTATESPEED * 5.0;//default: 1.0
        controls.panSpeed = uiState.UI_STATE_CAMERA_CONTROLS_PANSPEED * 0.3;//default: 0.3
        controls.zoomSpeed = uiState.UI_STATE_CAMERA_CONTROLS_ZOOMSPEED * 1.2;//default: 1.2
        controls.update();
    }

    updateParameters() {
        this.updateParametersData();
        this.updateParametersRendering();
        this.updateParametersActiveBehavior();
    }

    computeStuff(){
        //define in child class
        console.error("computeStuff not defined");
    }

    updateVisualElements(){
        //define in child class
        console.error("updateVisualElements not defined");
    }

    updateParametersData() {
        const { uiState } = this.context;
        var mu = uiState.UI_STATE_DATA_PHYSICS_MU;
        var angular_velocity = uiState.UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY;
        var use_constant_velocity = uiState.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY;
        var seed_energy = uiState.UI_STATE_DATA_PHYSICS_SEED_ENERGY;
        var seed_direction_x = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X;
        var seed_direction_y = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y;
        var seed_direction_z = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z;
        var seed_position_x = uiState.UI_STATE_DATA_PHYSICS_SEED_POSITION_X;
        var seed_position_y = uiState.UI_STATE_DATA_PHYSICS_SEED_POSITION_Y;

        var step_size = uiState.UI_STATE_DATA_INTEGRATION_STEP_SIZE;
        var max_steps = uiState.UI_STATE_DATA_INTEGRATION_MAX_STEPS;
        var termination_method = uiState.UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD;
        
        var domain_min_x = uiState.UI_STATE_DATA_DOMAIN_MIN_X;
        var domain_max_x = uiState.UI_STATE_DATA_DOMAIN_MAX_X;
        var domain_pixels_x = uiState.UI_STATE_DATA_DOMAIN_PIXELS_X;
        var domain_min_y = uiState.UI_STATE_DATA_DOMAIN_MIN_Y;
        var domain_max_y = uiState.UI_STATE_DATA_DOMAIN_MAX_Y;
        var domain_pixels_y = uiState.UI_STATE_DATA_DOMAIN_PIXELS_Y;

        var angle_pixels_x = uiState.UI_STATE_DATA_ANGLE_PIXELS_X;
        var angle_pixels_y = uiState.UI_STATE_DATA_ANGLE_PIXELS_Y;

        this.sceneWrapper.updateParametersData(mu, angular_velocity, use_constant_velocity, seed_energy, seed_direction_x, seed_direction_y, seed_direction_z, seed_position_x, seed_position_y, step_size, max_steps, termination_method, domain_min_x, domain_max_x, domain_pixels_x, domain_min_y, domain_max_y, domain_pixels_y, angle_pixels_x, angle_pixels_y);
    }

    updateParametersRendering(){
        const { uiState } = this.context;
        var max_radius_bodies = uiState.UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES;
        var radius_center_of_mass = uiState.UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS;
        var radius_clicked_position = uiState.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS;
        var rendering_ftle_type = uiState.UI_STATE_RENDERING_FTLE_TYPE;
        var rendering_texture_mode = uiState.UI_STATE_RENDERING_TEXTURE_MODE;
        var rendering_specialized_mode = uiState.UI_STATE_RENDERING_SPECIALIZED_MODE;
        var return_number = uiState.UI_STATE_RENDERING_RETURN_NUMBER;
        var rendering_forward = uiState.UI_STATE_RENDERING_DIRECTION;
        var rendering_raw_mode = uiState.UI_STATE_RENDERING_RAW_MODE;
        var rendering_raw_mode_layer = uiState.UI_STATE_RENDERING_RAW_MODE_LAYER;
        var rendering_raw_mode_x_texture_index = uiState.UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX;
        var rendering_raw_mode_y_texture_index = uiState.UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX;
        var scalar_min = uiState.UI_STATE_RENDERING_SCALAR_MIN;
        var scalar_max = uiState.UI_STATE_RENDERING_SCALAR_MAX;
        var opacity = uiState.UI_STATE_RENDERING_OPACITY;
        var tube_segment_length = uiState.UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH;
        var tube_max_segments = uiState.UI_STATE_RENDERING_TUBE_MAX_SEGMENTS;
        var tube_num_sides = uiState.UI_STATE_RENDERING_TUBE_NUM_SIDES;
        var tube_radius = uiState.UI_STATE_RENDERING_TUBE_RADIUS;

        var tube_only_show_successful_returns = uiState.UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS;

        this.sceneWrapper.updateParametersRendering(max_radius_bodies, radius_center_of_mass, radius_clicked_position, 
            rendering_ftle_type, rendering_texture_mode, rendering_specialized_mode, return_number, rendering_forward, rendering_raw_mode, 
            rendering_raw_mode_layer, rendering_raw_mode_x_texture_index, rendering_raw_mode_y_texture_index,
            scalar_min, scalar_max, opacity, tube_segment_length, tube_max_segments, tube_num_sides, tube_radius, tube_only_show_successful_returns);       
    }

    updateParametersActiveBehavior() {
        const { uiState } = this.context;
        var activeBehavior = uiState.UI_STATE_ACTIVE_BEHAVIOR;
        var linkedViewsActive = uiState.UI_STATE_LINKED_VIEWS_ACTIVE;
        this.sceneWrapper.updateParametersActiveBehavior(activeBehavior, linkedViewsActive);
        this.sceneWrapper.updateBehavior();
    }

    alignCameraWithDomain(){
        this.sceneWrapper.alignCameraWithDomain(this.camera, this.controls);
        console.log(this.camera.position)
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      RENDERING
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    renderLoop = () => {
        this.updateParametersActiveBehavior();
        this.sceneWrapper.updateBehavior();
        this.sceneWrapper.preRender();
        this.active_controls.update();
        this.renderer.render(this.active_scene, this.active_camera);
        requestAnimationFrame(this.renderLoop);
    }

    render() {
        return (
            <div className="parent h-full w-full p-2">
                <div className="child flex flex-1 h-full w-full" ref={mount => { this.mount = mount; }} />
            </div>
        )
    }
}

export default ThreeContainer;