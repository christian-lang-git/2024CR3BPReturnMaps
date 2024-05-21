import React, { Component } from "react";
import * as THREE from "three";
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

import Emitter from '../utility/emitter';
import * as Constants from "../utility/constants";
import { AppContext } from "@/components/uicustom/AppContext"
import { SceneWrapperVisualization } from "./sceneWrapperVisualization";

class ThreeContainer extends Component {

    static contextType = AppContext;

    componentDidMount() {
        console.warn("ThreeScene::componentDidMount");

        this.initializeScene();
        this.initializeRenderer();
        this.initializeCamera();
        this.initializeControls();
        this.initializeRayCaster();
        this.initializeEventHandlers();

        this.loadScene();

        this.updateCanvasSize();
        this.updateControls();
        this.updateParameters();
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
    }

    initializeRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(10, 10);
        this.mount.appendChild(this.renderer.domElement);
    }

    initializeCamera() {
        this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.01, 100);
        this.camera.position.z = 5;
        this.scene.add(this.camera);
    }

    initializeControls() {
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.update();
    }

    initializeRayCaster() {
        this.raycaster = new THREE.Raycaster();
    }

    initializeEventHandlers() {
        window.addEventListener("resize", this.handleResize);
        Emitter.on(Constants.EVENT_RESIZE_PANEL, this.handleResize);
        Emitter.on(Constants.EVENT_DATA_UPDATE, this.handleEventDataUpdate);
        Emitter.on(Constants.EVENT_CAMERA_UPDATE, this.handleEventCameraUpdate);
        Emitter.on(Constants.EVENT_RENDERING_UPDATE, this.handleEventRenderingUpdate);
    }



    loadScene() {
        this.sceneWrapper = new SceneWrapperVisualization(this.renderer, this.scene, this.camera, this.controls, this.raycaster);
        this.sceneWrapper.initialize();
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

    handleEventDataUpdate = () => {
        console.log("handleEventDataUpdate");
        this.updateParametersPhysics();
        this.updateParametersDomain();
    }

    handleEventRenderingUpdate = () => {
        console.log("handleEventRenderingUpdate");
        this.updateParametersRendering();
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

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.controls.handleResize();
        this.controls.update();

        this.renderer.setSize(width, height, false);
        this.renderer.render(this.scene, this.camera);
        console.warn("RESIZE")
    }

    updateControls() {
        const { uiState } = this.context;
        this.controls.rotateSpeed = uiState.UI_STATE_CAMERA_CONTROLS_ROTATESPEED * 5.0;//default: 1.0
        this.controls.panSpeed = uiState.UI_STATE_CAMERA_CONTROLS_PANSPEED * 0.3;//default: 0.3
        this.controls.zoomSpeed = uiState.UI_STATE_CAMERA_CONTROLS_ZOOMSPEED * 1.2;//default: 1.2
        this.controls.update();
    }

    updateParameters() {
        this.updateParametersPhysics();
        this.updateParametersDomain();
        this.updateParametersRendering();
        this.updateParametersActiveBehavior();
    }

    updateParametersPhysics() {
        const { uiState } = this.context;
        var mu = uiState.UI_STATE_DATA_PHYSICS_MU;
        var seed_energy = uiState.UI_STATE_DATA_PHYSICS_SEED_ENERGY;
        var seed_direction_x = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X;
        var seed_direction_y = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y;
        var seed_direction_z = uiState.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z;
        this.sceneWrapper.updateParametersPhysics(mu, seed_energy, seed_direction_x, seed_direction_y, seed_direction_z);
        this.sceneWrapper.updateBodies();
    }

    updateParametersDomain() {
        const { uiState } = this.context;
        var domain_min_x = uiState.UI_STATE_DATA_DOMAIN_MIN_X;
        var domain_max_x = uiState.UI_STATE_DATA_DOMAIN_MAX_X;
        var domain_pixels_x = uiState.UI_STATE_DATA_DOMAIN_PIXELS_X;
        var domain_min_y = uiState.UI_STATE_DATA_DOMAIN_MIN_Y;
        var domain_max_y = uiState.UI_STATE_DATA_DOMAIN_MAX_Y;
        var domain_pixels_y = uiState.UI_STATE_DATA_DOMAIN_PIXELS_Y;
        this.sceneWrapper.updateParametersDomain(domain_min_x, domain_max_x, domain_pixels_x, domain_min_y, domain_max_y, domain_pixels_y);
        this.sceneWrapper.updateTexturedPlane();
    }

    updateParametersRendering(){
        const { uiState } = this.context;
        var max_radius_bodies = uiState.UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES;
        var radius_center_of_mass = uiState.UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS;
        var radius_clicked_position = uiState.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS;
        var rendering_texture_mode = uiState.UI_STATE_RENDERING_TEXTURE_MODE;
        var rendering_specialized_mode = uiState.UI_STATE_RENDERING_SPECIALIZED_MODE;

        this.sceneWrapper.updateParametersRendering(max_radius_bodies, radius_center_of_mass, radius_clicked_position, rendering_texture_mode, rendering_specialized_mode);       
        this.sceneWrapper.updateBodies();
        this.sceneWrapper.updateClickedPosition();     
        this.sceneWrapper.updateTexturedPlane();
    }

    updateParametersActiveBehavior() {
        const { uiState } = this.context;
        var activeBehavior = uiState.UI_STATE_ACTIVE_BEHAVIOR;
        this.sceneWrapper.updateParametersActiveBehavior(activeBehavior);
        this.sceneWrapper.updateBehavior();
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
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
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