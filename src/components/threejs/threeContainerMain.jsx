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
        Emitter.on(Constants.EVENT_DOWNLOAD, this.handleEventDownload);
        Emitter.on(Constants.EVENT_FULL_UPDATE, this.handleEventFullUpdate);
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
    
    handleEventDownload = () => {
        console.warn("handleEventDownload");
        this.saveImage();
    }

    handleEventFullUpdate = () => {
        console.warn("handleEventFullUpdate");
        this.updateParametersData();
        this.updateParametersRendering();
        this.computeStuff();
        this.updateVisualElements();
    }

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
        this.sceneWrapper.recalculateStreamlineFromSimulationParameters();//this does nothing in aux view
        this.sceneWrapper.repositionReturnSpheres();
        this.sceneWrapper.repositionSeedSpheres();
        //old below:
        //this.sceneWrapper.recalculateStreamlineWithLastParameters();
        //this.sceneWrapper.recalculateStreamlineKeepPosition();        
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

    saveImage(){
        this.renderer.render(this.active_scene, this.active_camera);
        var canvas = this.renderer.domElement;
        canvas.toBlob((blob) => {
            this.saveBlob(blob, "capture-main.png");
        });
    }

}

export default ThreeContainerMain;