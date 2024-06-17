import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";

import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

class ObjectArrow {
    constructor(position, length, radius, cone_radius_factor, cone_fraction, color_hex){
        this.position = position,
        this.length = length;
        this.radius = radius;
        this.cone_radius_factor = cone_radius_factor;
        this.cone_fraction = cone_fraction;
        this.color_hex = color_hex;

        this.list_mesh = [];

        this.build();
    }

    build(){
        var radius = this.radius;
        var cone_radius_factor = this.cone_radius_factor;
        var cylinder_height = this.length * (1-this.cone_fraction);
        var cylinder_radial_segments = 20;
        var cylinder_height_segments = 1;

        var cone_radius = cone_radius_factor*radius;
        var cone_height = this.length * this.cone_fraction;
        var cone_radial_segments = 20;
        var cone_height_segments = 1;

        this.material = new THREE.MeshBasicMaterial( {color: this.color_hex} ); 

        this.cylinder_geometry = new THREE.CylinderGeometry(radius, radius, cylinder_height, cylinder_radial_segments, cylinder_height_segments ); 
        this.cylinder_geometry.translate(0, cylinder_height/2, 0);

        this.cylinder_mesh = new THREE.Mesh( this.cylinder_geometry, this.material );

        this.cone_geometry = new THREE.ConeGeometry( cone_radius, cone_height, cone_radial_segments, cone_height_segments ); 
        this.cone_geometry.translate(0, cylinder_height+cone_height/2, 0);
        this.cone_mesh = new THREE.Mesh( this.cone_geometry, this.material );

        this.combined_geometry = BufferGeometryUtils.mergeGeometries([this.cylinder_geometry, this.cone_geometry], false);
        this.mesh = new THREE.Mesh( this.combined_geometry, this.material );

        this.list_mesh.push(this.cylinder_mesh);
        this.list_mesh.push(this.cone_mesh);
    }
}

class ObjectAxes{

    constructor(position, length_x, length_y, length_z, radius, cone_radius_factor, cone_fraction){
        this.position = position;
        this.length_x = length_x;
        this.length_y = length_y;
        this.length_z = length_z;
        this.radius = radius;
        this.cone_radius_factor = cone_radius_factor;
        this.cone_fraction = cone_fraction;

        this.list_arrows = [];

        var has_z = true;
        this.build(has_z);
    }

    setValues(position, length_x, length_y, length_z, radius, cone_radius_factor, cone_fraction){
        this.position = position;
        this.length_x = length_x;
        this.length_y = length_y;
        this.length_z = length_z;
        this.radius = radius;
        this.cone_radius_factor = cone_radius_factor;
        this.cone_fraction = cone_fraction;
    }

    build(has_z, color1, color2, color3){
        this.list_arrows = [];

        this.axes_arrow_x = new ObjectArrow(this.position, this.length_x, this.radius, this.cone_radius_factor, this.cone_fraction, color1);
        this.axes_arrow_x.mesh.rotateZ(THREE.MathUtils.degToRad(-90));
        this.list_arrows.push(this.axes_arrow_x);

        this.axes_arrow_y = new ObjectArrow(this.position, this.length_y, this.radius, this.cone_radius_factor, this.cone_fraction, color2);
        this.list_arrows.push(this.axes_arrow_y);

        if(has_z){
            this.axes_arrow_z = new ObjectArrow(this.position, this.length_z, this.radius, this.cone_radius_factor, this.cone_fraction, color3);
            this.axes_arrow_z.mesh.rotateX(THREE.MathUtils.degToRad(90));
            this.list_arrows.push(this.axes_arrow_z);
        }
    }

    addToScene(scene){
        for (var i = 0; i < this.list_arrows.length; i++) {
            var arrow = this.list_arrows[i];
            scene.add(arrow.mesh);
            arrow.mesh.position.set(this.position[0],this.position[1],this.position[2]);
        }
    }

    removefromScene(scene){
        for (var i = 0; i < this.list_arrows.length; i++) {
            var arrow = this.list_arrows[i];
            scene.remove(arrow.mesh);
        }
    }

    rebuild(has_z, scene, simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3){       

        this.removefromScene(scene);

        var position = vec3.fromValues(min_x, min_y, 0);
        var length_x = max_x - min_x;
        var length_y = max_y - min_y;
        var length_z = Math.min(length_x, length_y) / 2;
        var cone_radius_factor = 5.0;
        var cone_fraction = 0.05;

        this.setValues(position, length_x, length_y, length_z, radius, cone_radius_factor, cone_fraction);
        this.build(has_z, color1, color2, color3);
        this.addToScene(scene);
    }
}


export { ObjectArrow, ObjectAxes }