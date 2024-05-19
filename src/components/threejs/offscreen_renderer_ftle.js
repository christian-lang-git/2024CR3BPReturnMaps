import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";

class OffscreenRendererFTLE {

    constructor(renderer) {
        this.renderer = renderer;
        this.initialize();
    }

    initialize() {
        console.warn("INITIALIZE OffscreenRendererFTLE");

        this.width = 100;
        this.height = 100;
        this.bufferScene = new THREE.Scene();
        this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        });
        this.bufferCamera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 100);
        this.bufferCamera.position.z = 5;

        this.dummy_plane_geometry = new THREE.PlaneGeometry(8, 8);
        this.dummy_plane_material = new THREE.MeshBasicMaterial({ color: 0x500000, side: THREE.DoubleSide });
        this.dummy_plane_mesh = new THREE.Mesh(this.dummy_plane_geometry, this.dummy_plane_material);
        this.bufferScene.add(this.dummy_plane_mesh);

        this.compute();
    }

    compute() {
        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.bufferScene, this.bufferCamera);
        this.renderer.setRenderTarget(null);
    }

}

export { OffscreenRendererFTLE }