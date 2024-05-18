import React, { Component } from "react";
import * as THREE from "three";
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

import { SimulationParameters } from "../logic/simulation_parameters";
import Emitter from '../utility/emitter';
import * as Constants from "../utility/constants";

class ThreeContainer extends Component {

    componentDidMount() {
        console.warn("ThreeScene::componentDidMount");

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(10, 10);

        this.mount.appendChild(this.renderer.domElement);
        var canvas = this.renderer.domElement;

        this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
        this.camera.position.z = 5;

        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        //we can use default controls if we use handleResize()
        //this.controls.rotateSpeed = 0.1;//default: 1.0
        //this.controls.panSpeed = 0.03;//default: 0.3
        //this.controls.zoomSpeed = 1.0;//default: 1.2
        this.controls.update();

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.renderer.render(this.scene, this.camera);

        window.addEventListener("resize", this.handleResize);

        this.updateCanvasSize();

        this.simulationParameters = new SimulationParameters();
        console.log("this.simulationParameters.mu", this.simulationParameters.mu);

        Emitter.on(Constants.EVENT_RESIZE_PANEL, this.handleResize);
        Emitter.on(Constants.EVENT_CALCULATE_FTLE, this.handleEventCalculateFTLE);

        this.renderLoop();
    }

    testAddRedCube() {
        console.log("testAddRedCube");

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({
            color: 0xff0000
        });
        this.mesh2 = new THREE.Mesh(geometry, material);
        this.mesh2.position.y = 1
        this.scene.add(this.mesh2);



        this.renderer.render(this.scene, this.camera);
    };

    handleResize = () => {
        console.log("handleResize");
        this.updateCanvasSize();
    }

    handleEventCalculateFTLE = () => {
        console.log("handleEventCalculateFTLE");
    }

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

    renderLoop = () => {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.renderLoop);
    }

    render() {
        return (
            <div className="parent h-full w-full">
                <div className="child flex flex-1 p-2 h-full w-full" ref={mount => { this.mount = mount; }} />
            </div>
        )
    }
}

export default ThreeContainer;