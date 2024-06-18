import React, { Component } from "react";
import * as THREE from "three";
//import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

import Emitter from '../utility/emitter';
import * as Constants from "../utility/constants";
import { AppContext } from "@/components/uicustom/AppContext"
import { SceneWrapperVisualizationMain } from "./sceneWrapperVisualizationMain";
import ThreeContainer from "./threeContainer";

class ThreeContainerMain extends ThreeContainer {

    constructor(props) {
        super(props);
        console.warn("CONSTRUCTOR ThreeContainerMain");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      INITIALIZATION
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    initializeAdditional() {
        Emitter.on(Constants.EVENT_DATA_UPDATE, this.handleEventDataUpdate);
        Emitter.on(Constants.EVENT_RENDERING_UPDATE, this.handleEventRenderingUpdate);
        Emitter.on(Constants.EVENT_ALIGN_CAMERA, this.handleEventAlignCamera);        
    }

    loadScene() {
        this.sceneWrapper = new SceneWrapperVisualizationMain(this.renderer, this.scene, this.camera, this.controls, this.raycaster);
        this.sceneWrapper.initialize();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      EVENT HANDLERS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleEventDataUpdate = () => {
        console.log("handleEventDataUpdate");
        this.updateParametersData();
        this.computeStuff();
        this.updateVisualElements();
    }

    handleEventRenderingUpdate = () => {
        console.log("handleEventRenderingUpdate");
        this.updateParametersRendering();
        this.updateVisualElements();
    }

    handleEventAlignCamera = () => {
        console.log("handleEventAlignCamera");
        this.alignCameraWithDomain();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      UPDATE FUNCTIONS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    computeStuff(){
        this.sceneWrapper.computeStuff();
        this.sceneWrapper.recalculateStreamlineWithLastParameters();
        this.sceneWrapper.recalculateStreamlineKeepPosition();        
    }

    updateVisualElements(){
        this.sceneWrapper.updateVisualElements();
        /*
        this.sceneWrapper.updateBodies();
        this.sceneWrapper.updateClickedPosition();   
        this.sceneWrapper.updateStreamlineModel();  
        this.sceneWrapper.updateTexturedPlane();
        this.sceneWrapper.updateAxes();
        */
    }

}

export default ThreeContainerMain;