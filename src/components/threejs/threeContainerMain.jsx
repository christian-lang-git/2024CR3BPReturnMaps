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
        this.auxRef = props.auxRef;
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
        Emitter.on(Constants.EVENT_DATA_UPDATE_STREAMLINE, this.handleEventDataUpdateStreamline);        
        Emitter.on(Constants.EVENT_RENDERING_UPDATE, this.handleEventRenderingUpdate);
        Emitter.on(Constants.EVENT_ALIGN_CAMERA, this.handleEventAlignCamera);       

        Emitter.on(Constants.EVENT_SEED_DIRECTION_CHANGED, this.handleEventSeedDirectionChanged);     
        
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
        console.warn("handleEventDataUpdate");
        this.updateParametersData();
        this.computeStuff();
        this.updateVisualElements();
    }

    handleEventDataUpdateStreamline = () => {
        console.warn("handleEventDataUpdateStreamline");
        this.updateParametersData();
        this.computeStreamline();
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

    handleEventSeedDirectionChanged = () => {
        console.log("handleEventSeedDirectionChanged");
        this.sceneWrapper.OnSeedDirectionChanged();
        this.writeSeedDataToUI();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      UPDATE FUNCTIONS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    computeStuff(){
        console.warn("computeStuff");
        this.sceneWrapper.computeStuff();
        this.sceneWrapper.recalculateStreamlineWithLastParameters();
        this.sceneWrapper.recalculateStreamlineKeepPosition();        
    }

    computeStreamline(){
        console.warn("computeStreamline");
        this.sceneWrapper.recalculateStreamlineFromSimulationParameters();//this does nothing in aux view
        this.sceneWrapper.repositionReturnSpheres();
        this.sceneWrapper.repositionSeedSpheres();
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