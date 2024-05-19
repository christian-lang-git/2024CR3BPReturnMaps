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
        this.scene.background = new THREE.Color( 0x000000 );//background color for debugging layout
    }

    initializeRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(10, 10);
        this.mount.appendChild(this.renderer.domElement);
    }

    initializeCamera() {
        this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
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
        Emitter.on(Constants.EVENT_DATA_UPDATE_PHYSICS, this.handleEventDataUpdatePhysics);
        Emitter.on(Constants.EVENT_CALCULATE_FTLE, this.handleEventCalculateFTLE);
        Emitter.on(Constants.EVENT_CAMERA_UPDATE_CONTROLS, this.handleEventCameraUpdateControls);
        Emitter.on(Constants.EVENT_RENDERING_UPDATE_BODIES, this.handleEventRenderingUpdateBodies);
        Emitter.on(Constants.EVENT_RENDERING_UPDATE_CLICKED_POSITION, this.handleEventRenderingUpdateClickedPosition);
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

    handleEventCalculateFTLE = () => {
        console.log("handleEventCalculateFTLE");
    }

    handleEventCameraUpdateControls = () => {
        console.log("handleEventCameraUpdateControls");
        this.updateControls();
    }

    handleEventDataUpdatePhysics = () => {
        console.log("handleEventDataUpdatePhysics");
        this.updateParametersPhysics();
    }

    handleEventRenderingUpdateBodies = () => {
        console.log("handleEventRenderingUpdateBodies");
        this.updateParametersBodies();
    }

    handleEventRenderingUpdateClickedPosition = () => {
        console.log("handleEventRenderingUpdateClickedPosition");
        this.updateParametersClickedPosition();
    }

    handleEventUpdateActiveBehavior = () => {
        console.log("handleEventUpdateActiveBehavior");
        this.updateParameters();
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
        this.updateParametersBodies();
        this.updateParametersClickedPosition();
        this.updateParametersActiveBehavior();
    }

    updateParametersPhysics() {
        const { uiState } = this.context;
        var mu = uiState.UI_STATE_DATA_PHYSICS_MU;
        this.sceneWrapper.updateParametersPhysics(mu);
        this.sceneWrapper.updateBodies();
    }

    updateParametersBodies() {
        const { uiState } = this.context;
        var max_radius_bodies = uiState.UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES;
        var radius_center_of_mass = uiState.UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS;
        this.sceneWrapper.updateParametersBodies(max_radius_bodies, radius_center_of_mass);
        this.sceneWrapper.updateBodies();
    }

    updateParametersClickedPosition() {        
        const { uiState } = this.context;
        var radius_clicked_position = uiState.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS;
        this.sceneWrapper.updateParametersClickedPosition(radius_clicked_position);
        this.sceneWrapper.updateClickedPosition();
    }

    updateParametersActiveBehavior(){
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