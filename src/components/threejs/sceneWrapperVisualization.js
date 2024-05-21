import * as THREE from "three";
import { ObjectArrow, ObjectAxes } from "./custom_objects";
import { vec3 } from "gl-matrix/esm";
import { SimulationParameters } from "@/components/logic/simulation_parameters";
import { getMousePositionInCanvasNDC } from "@/components/utility/mouseHelper";
import * as Constants from "@/components/utility/constants";
import { OffscreenRendererFlowMap } from "./offscreen_renderer_flow_map";
import { OffscreenRendererSeeds} from "./offscreen_renderer_seeds";
import { OffscreenRendererGravitationalForce} from "./offscreen_renderer_gravitational_force";
import { TextureRenderer } from "@/components/threejs/texture_renderer";

/**
 * This class is responsible for the scene that shows the main visualization
 * 
 * Other SceneWrappers could for example visualize:
 * - a sphere where the user can select a direction
 * - a deformed sphere that visualizes equivalent energy
 */
class SceneWrapperVisualization {
    constructor(renderer, scene, camera, controls, raycaster) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.raycaster = raycaster;
        this.simulationParameters = new SimulationParameters();
        this.offscreenRendererFlowMap = new OffscreenRendererFlowMap(renderer, this.simulationParameters);
        this.offscreenRendererSeeds = new OffscreenRendererSeeds(renderer, this.simulationParameters);
        this.offscreenRendererGravitationalForce = new OffscreenRendererGravitationalForce(renderer, this.simulationParameters);

        this.offscreenRendererGravitationalForce.link(this.offscreenRendererSeeds);

        this.offscreenRendererSeeds.initialize();
        this.offscreenRendererGravitationalForce.initialize();
        this.offscreenRendererFlowMap.initialize();

        this.textureRenderer = new TextureRenderer(renderer, this.simulationParameters, scene);

    }

    initialize() {
        this.initializeLight();
        this.initializeAxesArrows();
        this.initializePlane();
        this.initializeTexturedPlane();
        this.initializeBodies();
        this.initializeClickedPositionMarker();
        this.initializeEventListeners();
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
        this.objectAxes = new ObjectAxes(position, length, radius, cone_radius_factor, cone_fraction);
        this.objectAxes.addToScene(this.scene);
    }

    initializePlane() {
        this.plane_geometry = new THREE.PlaneGeometry(8, 8);
        this.plane_material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        this.plane_material.transparent = true;
        this.plane_material.opacity = 0.5;
        this.plane_mesh = new THREE.Mesh(this.plane_geometry, this.plane_material);
        //this.scene.add(this.plane_mesh);
    }

    initializeTexturedPlane() {
        /*
        this.textured_plane_geometry = new THREE.PlaneGeometry(1, 1);
        this.textured_plane_material = new THREE.MeshBasicMaterial({map:this.offscreenRendererFlowMap.renderTarget.texture});
        this.textured_plane_mesh = new THREE.Mesh(this.textured_plane_geometry, this.textured_plane_material);
        this.scene.add(this.textured_plane_mesh);
        */

        this.textureRenderer.initialize();
        /*
        this.textured_plane_material.transparent = true;
        this.textured_plane_material.opacity = 0.5;
        */
        //this.textured_plane_material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
    }


    /**
    * Generates the 3 spheres with radius 1
    */
    initializeBodies() {
        var radius = 1.0;

        this.primary_geometry = new THREE.SphereGeometry(radius);
        this.primary_material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.primary_mesh = new THREE.Mesh(this.primary_geometry, this.primary_material);
        this.primary_mesh.position.set(1, 0, 0);
        this.scene.add(this.primary_mesh);

        this.secondary_geometry = new THREE.SphereGeometry(radius);
        this.secondary_material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        this.secondary_mesh = new THREE.Mesh(this.secondary_geometry, this.secondary_material);
        this.secondary_mesh.position.set(-1, 0, 0);
        this.scene.add(this.secondary_mesh);

        this.center_geometry = new THREE.SphereGeometry(radius);
        this.center_material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        this.center_mesh = new THREE.Mesh(this.center_geometry, this.center_material);
        this.center_mesh.position.set(0, 0, 0);
        this.scene.add(this.center_mesh);
    }

    initializeClickedPositionMarker() {
        var radius = 1.0;
        this.clicked_geometry = new THREE.SphereGeometry(radius);
        this.clicked_material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
        this.clicked_mesh = new THREE.Mesh(this.clicked_geometry, this.clicked_material);
        this.clicked_mesh.position.set(0, 0, 10000);
        this.scene.add(this.clicked_mesh);
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

    rayCastAndMovePosition(mousePositionNDC){
        
        console.log("CLICK NDC:", mousePositionNDC.x, mousePositionNDC.y);
        var mouse = new THREE.Vector2();
        mouse.x = mousePositionNDC.x;
        mouse.y = mousePositionNDC.y;
        this.raycaster.setFromCamera(mouse, this.camera);
        const intersects = this.raycaster.intersectObject(this.plane_mesh);
        if (intersects.length > 0) {
            console.log("plane intersection", intersects[0].point);
            this.clicked_mesh.position.set(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
        }
        else {
            console.log("no plane intersection");
            this.clicked_mesh.position.set(0, 0, 10000);
        }
    }






    updateParametersPhysics(mu, seed_energy, seed_direction_x, seed_direction_y, seed_direction_z) {
        this.simulationParameters.mu = parseFloat(mu);
        this.simulationParameters.seed_energy = parseFloat(seed_energy);
        this.simulationParameters.seed_direction_x = parseFloat(seed_direction_x);
        this.simulationParameters.seed_direction_y = parseFloat(seed_direction_y);
        this.simulationParameters.seed_direction_z = parseFloat(seed_direction_z);
    }

    updateParametersDomain(domain_min_x, domain_max_x, domain_pixels_x, domain_min_y, domain_max_y, domain_pixels_y){       
        this.simulationParameters.domain_min_x = parseFloat(domain_min_x);    
        this.simulationParameters.domain_max_x = parseFloat(domain_max_x);    
        this.simulationParameters.domain_dimension_x = this.simulationParameters.domain_max_x - this.simulationParameters.domain_min_x;    
        this.simulationParameters.domain_pixels_x = parseFloat(domain_pixels_x);    
        this.simulationParameters.domain_min_y = parseFloat(domain_min_y);    
        this.simulationParameters.domain_max_y = parseFloat(domain_max_y);    
        this.simulationParameters.domain_dimension_y = this.simulationParameters.domain_max_y - this.simulationParameters.domain_min_y;  
        this.simulationParameters.domain_pixels_y = parseFloat(domain_pixels_y);
    }

    updateParametersRendering(max_radius_bodies, radius_center_of_mass, radius_clicked_position) {
        this.simulationParameters.max_radius_bodies = max_radius_bodies;
        this.simulationParameters.radius_center_of_mass = radius_center_of_mass;
        this.simulationParameters.radius_clicked_position = radius_clicked_position;
    }

    updateParametersActiveBehavior(activeBehavior){
        this.simulationParameters.activeBehavior = activeBehavior;        
    }

    updateBodies() {
        //scale
        var radius = this.simulationParameters.getPrimaryRadius();
        this.primary_mesh.scale.set(radius, radius, radius);
        var radius = this.simulationParameters.getSecondaryRadius();
        this.secondary_mesh.scale.set(radius, radius, radius);
        var radius = this.simulationParameters.getCenterOfMassRadius();
        this.center_mesh.scale.set(radius, radius, radius);

        //position
        this.primary_mesh.position.set(this.simulationParameters.getPrimaryX(), 0, 0);
        this.secondary_mesh.position.set(this.simulationParameters.getSecondaryX(), 0, 0);
    }

    updateTexturedPlane(){
        var min_x = this.simulationParameters.domain_min_x;
        var max_x = this.simulationParameters.domain_max_x;
        var min_y = this.simulationParameters.domain_min_y;
        var max_y = this.simulationParameters.domain_max_y;
        var scale_x = max_x - min_x;
        var scale_y = max_y - min_y;
        var pos_x = 0.5 * (min_x + max_x);
        var pos_y = 0.5 * (min_y + max_y);
        this.offscreenRendererSeeds.updateTexturedPlane();
        this.offscreenRendererSeeds.compute();
        this.offscreenRendererGravitationalForce.updateTexturedPlane();
        this.offscreenRendererGravitationalForce.compute();
        this.offscreenRendererFlowMap.updateTexturedPlane();
        this.offscreenRendererFlowMap.compute();

        this.textureRenderer.updateTransform(pos_x, pos_y, scale_x, scale_y);
        this.changeDisplayedTexture();
        this.textureRenderer.updateTexturedPlane();
    }

    changeDisplayedTexture(){
        this.textureRenderer.changeDisplayedTexture(this.offscreenRendererGravitationalForce.renderTarget.texture);
        //this.textureRenderer.changeDisplayedTexture(this.offscreenRendererSeeds.renderTarget.texture);
    }

    updateClickedPosition() {
        var radius = this.simulationParameters.getClickedPositionRadius();
        this.clicked_mesh.scale.set(radius, radius, radius);
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