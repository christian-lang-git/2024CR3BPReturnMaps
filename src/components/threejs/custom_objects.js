import * as THREE from "three";
import { vec3 } from "gl-matrix/esm";

import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as LINALG from "@/components/glsl/linalg";
import * as UTILITY from "@/components/glsl/utility";


const glsl = x => x[0];

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

    rebuild(has_z, z_factor, scene, simulationParameters, min_x, max_x, min_y, max_y, radius, color1, color2, color3){       

        this.removefromScene(scene);

        var position = vec3.fromValues(min_x, min_y, 0);
        var length_x = max_x - min_x;
        var length_y = max_y - min_y;
        var length_z = Math.min(length_x, length_y) * z_factor;//z_factor = 0.5 in default case
        var cone_radius_factor = 5.0;
        var cone_fraction = 0.05;

        this.setValues(position, length_x, length_y, length_z, radius, cone_radius_factor, cone_fraction);
        this.build(has_z, color1, color2, color3);
        this.addToScene(scene);
    }
}

class SpherelikeGrid{

    constructor(scene, material){
        console.warn("CONSTRUCTOR SpherelikeGrid");
        this.scene = scene;
        this.pixels_x = 0;
        this.pixels_y = 0;
        this.subdivide = false;    
        this.material = material; 
    }

    updateGrid(subdivide, pixels_x, pixels_y){
        var no_change = subdivide == this.subdivide && pixels_x == this.pixels_x && pixels_y == this.pixels_y;
        if(no_change){
            console.warn("SpherelikeGrid updateGrid no change");
            return;
        }

        console.warn("SpherelikeGrid updateGrid", pixels_x, pixels_y);

        this.subdivide = subdivide;//if true, one additional vertex per cell is added
        this.pixels_x = pixels_x;
        this.pixels_y = pixels_y;
        this.num_cells_x = pixels_x - 1;
        this.num_cells_y = pixels_y - 1;
        this.num_cells = this.num_cells_x * this.num_cells_y;
        this.num_vertices = pixels_x * pixels_y;
        this.num_triangles = this.num_cells * 2;
        if(subdivide){
            this.num_vertices += this.num_cells;
            this.num_triangles *= 2;
        }
        this.build();
    }

    build(){
        this.scene.remove(this.mesh);

        //console.warn("this.mesh", this.mesh);

        const geometry = new THREE.BufferGeometry();

        const vertices = new Float32Array(this.num_vertices * 3);
        const uv = new Float32Array(this.num_vertices * 2);
        const indices = Array(this.num_triangles);
        
        //iterate over all nodes of the grid to calculate vertex positions
        var index = 0;
        var index_uv = 0;
        for(var y_index = 0; y_index<this.pixels_y; y_index++){
            for(var x_index = 0; x_index<this.pixels_x; x_index++){
                //angles in virtual texture (when position is constant and direction is variable)
                //ISO convention (i.e. for physics: radius r, inclination theta, azimuth phi) --> https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
                var theta_radians = Math.PI * (x_index / (this.pixels_x - 1.0));
                var phi_radians = 2.0 * Math.PI * (y_index / (this.pixels_y - 1.0));

                var dir_x = Math.sin(theta_radians) * Math.cos(phi_radians);
                var dir_y = Math.sin(theta_radians) * Math.sin(phi_radians);
                var dir_z = Math.cos(theta_radians);

                vertices[index] = dir_x;
                vertices[index+1] = dir_y;
                vertices[index+2] = dir_z;                
                index+=3;
                
                uv[index_uv] = (x_index / (this.pixels_x - 1.0));
                uv[index_uv+1] = (y_index / (this.pixels_y - 1.0));
                index_uv+=2;

            }
        }

        //iterate over all cells of the grid to generate triangles
        var index = 0;
        for(var y_index = 0; y_index<this.num_cells_y; y_index++){
            for(var x_index = 0; x_index<this.num_cells_x; x_index++){
                
                var vertex_index_top_left = x_index + y_index * this.pixels_x;
                var vertex_index_bottom_left = vertex_index_top_left + this.pixels_x;
                var vertex_index_bottom_right = vertex_index_bottom_left + 1;
                var vertex_index_top_right = vertex_index_top_left + 1;

                //this order results in triangles visible from inside the sphere
                //indices[index] = vertex_index_top_left;
                //indices[index+1] = vertex_index_bottom_left;
                //indices[index+2] = vertex_index_top_right;

                //this order results in triangles visible from outside the sphere
                indices[index] = vertex_index_top_left;
                indices[index+1] = vertex_index_top_right;
                indices[index+2] = vertex_index_bottom_left;
                //second triangle of cell
                indices[index+3] = vertex_index_top_right;
                indices[index+4] = vertex_index_bottom_right;
                indices[index+5] = vertex_index_bottom_left;

                index+=6;
            }
        }

        geometry.setIndex( indices );
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        geometry.setAttribute( 'uv', new THREE.BufferAttribute( uv, 2 ) );

        this.mesh = new THREE.Mesh( geometry, this.material );

        this.scene.add(this.mesh);
    }
}

export { ObjectArrow, ObjectAxes, SpherelikeGrid }