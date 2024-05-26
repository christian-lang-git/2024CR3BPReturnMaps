import * as THREE from "three";
import { glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 } from "gl-matrix/esm";

class PointData {
    constructor() {
        this.position = vec3.create();
        this.direction = vec3.create();
        this.arc_length = 0;
        this.t = 0;
    }

    getPosTHREE() {
        return new THREE.Vector3(this.position[0], this.position[1], this.position[2]);
    }
}

class Streamline {
    constructor(streamline_generator, multi) {
        console.log("Streamline: initialize");
        this.streamline_generator = streamline_generator;
        this.simulationParameters = streamline_generator.simulationParameters;
        this.scene = streamline_generator.scene;
        this.multi = multi;

        this.list_point_data = [];
        this.path = null;
        this.signum = 1;
        this.arc_length = 0;

        this.seed_position = vec3.fromValues(0.75, 0.4, 0);
        this.seed_direction = vec3.fromValues(0, 0, 0.1);

        this.existsInScene = false;
    }

    setSeed(position, direction) {
        vec3.copy(this.seed_position, position);
        vec3.copy(this.seed_direction, direction);
    }

    setSeedPosition(position) {
        vec3.copy(this.seed_position, position);
    }

    setSeedDirection(direction) {
        vec3.copy(this.seed_direction, direction);
    }
    /*
    recalculate(x, y, z, dir_x, dir_y, dir_z, energy) {
        if(this.existsInScene){
            this.scene.remove(this.mesh);
        }

        var seed_direction = vec3.fromValues(dir_x, dir_y, dir_z);
        vec3.normalize(seed_direction, seed_direction);
        vec3.scale(seed_direction, seed_direction, energy);

        this.setSeedPosition(vec3.fromValues(x, y, z));
        this.setSeedDirection(seed_direction);
        this.calculate();
        this.build();

        this.scene.add(this.mesh);
        this.existsInScene = true;
    }
    */

    recalculate(x, y, z, dir_x, dir_y, dir_z, energy) {
        var seed_direction = vec3.fromValues(dir_x, dir_y, dir_z);
        vec3.normalize(seed_direction, seed_direction);
        vec3.scale(seed_direction, seed_direction, energy);

        this.setSeedPosition(vec3.fromValues(x, y, z));
        this.setSeedDirection(seed_direction);
        this.calculate();
    }

    recalculateFromOther(other){
        console.warn("OTHER:", other);
        var seed_position = vec3.create();
        var seed_direction = vec3.create();
        var end_point_data = other.list_point_data[other.list_point_data.length-1];
        vec3.copy(seed_position, end_point_data.position);
        vec3.copy(seed_direction, end_point_data.direction);

        this.setSeedPosition(seed_position);
        this.setSeedDirection(seed_direction);
        this.calculate();
    }

    calculate() {
        this.list_point_data = [];
        this.arc_length = 0;
        this.t = 0;
        this.success = false;

        //initial position
        var current_position_data = new PointData();
        vec3.copy(current_position_data.position, this.seed_position);
        vec3.copy(current_position_data.direction, this.seed_direction);
        this.list_point_data.push(current_position_data);

        console.warn("SEED DIRECTION: ", this.seed_direction);


        var difference = vec3.create();//current - previous positions, calculated from k values
        var k1 = vec3.create();
        var k2 = vec3.create();
        var k3 = vec3.create();
        var k4 = vec3.create();
        var k1_2 = vec3.create();// k1_2 = k1/2
        var k2_2 = vec3.create();// k2_2 = k2/2
        var k1_6 = vec3.create();// k1_6 = k1/6
        var k2_3 = vec3.create();// k2_3 = k2/3
        var k3_3 = vec3.create();// k3_3 = k3/3
        var k4_6 = vec3.create();// k4_6 = k4/6
        var current_plus_k1_2 = vec3.create();
        var current_plus_k2_2 = vec3.create();
        var current_plus_k3 = vec3.create();

        var difference_l = vec3.create();//current - previous positions, calculated from k values
        var l1 = vec3.create();
        var l2 = vec3.create();
        var l3 = vec3.create();
        var l4 = vec3.create();
        var l1_2 = vec3.create();// k1_2 = k1/2
        var l2_2 = vec3.create();// k2_2 = k2/2
        var l1_6 = vec3.create();// k1_6 = k1/6
        var l2_3 = vec3.create();// k2_3 = k2/3
        var l3_3 = vec3.create();// k3_3 = k3/3
        var l4_6 = vec3.create();// k4_6 = k4/6
        var current_plus_l1_2 = vec3.create();
        var current_plus_l2_2 = vec3.create();
        var current_plus_l3 = vec3.create();

        var max_steps = this.streamline_generator.simulationParameters.max_steps;
        var step_size = this.streamline_generator.simulationParameters.step_size;
        var termination_method = this.streamline_generator.simulationParameters.termination_method;
        var isOnPositiveZ = this.seed_direction[2] >= 0;

        for (var i = 0; i < max_steps; i++) {
            //reference to the current position (result from last iteration)
            var current_position = current_position_data.position;
            var current_direction = current_position_data.direction;

            //the new point to be calculated
            var next_position_data = new PointData();
            this.list_point_data.push(next_position_data);



            //---------- START OF RK4 ----------
            //CALCULATE: vec3 k1 = step_size * f(current_position, signum);
            vec3.scale(k1, this.streamline_generator.f_position(current_position, current_direction, this.signum), step_size);
            vec3.scale(l1, this.streamline_generator.f_direction(current_position, current_direction, this.signum), step_size);

            //CALCULATE: vec3 k2 = step_size * f(current_position + k1/2, signum);
            vec3.scale(k1_2, k1, 1 / 2);// k1_2 = k1/2      
            vec3.scale(l1_2, l1, 1 / 2);// k1_2 = k1/2      
            vec3.add(current_plus_k1_2, current_position, k1_2);// current_position + k1/2         
            vec3.add(current_plus_l1_2, current_direction, l1_2);// current_position + k1/2       
            vec3.scale(k2, this.streamline_generator.f_position(current_plus_k1_2, current_plus_l1_2, this.signum), step_size);
            vec3.scale(l2, this.streamline_generator.f_direction(current_plus_k1_2, current_plus_l1_2, this.signum), step_size);

            //CALCULATE: vec3 k3 = step_size * f(current_position + k2/2, signum);
            vec3.scale(k2_2, k2, 1 / 2);// k2_2 = k2/2
            vec3.scale(l2_2, l2, 1 / 2);// k2_2 = k2/2
            vec3.add(current_plus_k2_2, current_position, k2_2);// current_position + k2/2   
            vec3.add(current_plus_l2_2, current_direction, k2_2);// current_position + k2/2        
            vec3.scale(k3, this.streamline_generator.f_position(current_plus_k2_2, current_plus_l2_2, this.signum), step_size);
            vec3.scale(l3, this.streamline_generator.f_direction(current_plus_k2_2, current_plus_l2_2, this.signum), step_size);

            //CALCULATE: vec3 k4 = step_size * f(current_position + k3, signum);
            vec3.add(current_plus_k3, current_position, k3);// current_position + k3     
            vec3.add(current_plus_l3, current_direction, l3);// current_position + k3       
            vec3.scale(k4, this.streamline_generator.f_position(current_plus_k3, current_plus_l3, this.signum), step_size);
            vec3.scale(l4, this.streamline_generator.f_direction(current_plus_k3, current_plus_l3, this.signum), step_size);

            //CALCULATE: vec3 next_position = current_position + k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6;
            vec3.scale(k1_6, k1, 1 / 6);// k1_6 = k1/6
            vec3.scale(l1_6, l1, 1 / 6);// k1_6 = k1/6
            vec3.scale(k2_3, k2, 1 / 3);// k2_3 = k2/3
            vec3.scale(l2_3, l2, 1 / 3);// k2_3 = k2/3
            vec3.scale(k3_3, k3, 1 / 3);// k3_3 = k3/3
            vec3.scale(l3_3, l3, 1 / 3);// k3_3 = k3/3
            vec3.scale(k4_6, k4, 1 / 6);// k4_6 = k4/6
            vec3.scale(l4_6, l4, 1 / 6);// k4_6 = k4/6

            vec3.copy(difference, k1_6);
            vec3.copy(difference_l, l1_6);
            vec3.add(difference, difference, k2_3);// k1 / 6 + k2 / 3
            vec3.add(difference_l, difference_l, l2_3);// k1 / 6 + k2 / 3
            vec3.add(difference, difference, k3_3);// k1 / 6 + k2 / 3 + k3 / 3
            vec3.add(difference_l, difference_l, l3_3);// k1 / 6 + k2 / 3 + k3 / 3
            vec3.add(difference, difference, k4_6);// k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6
            vec3.add(difference_l, difference_l, l4_6);// k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6

            //vec3.add(difference, difference, k4_6);// next_position = current_position + k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6;
            //vec3.add(difference_l, difference_l, l4_6);// next_position = current_position + k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6;
            vec3.add(next_position_data.position, current_position, difference);
            vec3.add(next_position_data.direction, current_direction, difference_l);

            //console.log(next_position_data.position);
            var segment_length = vec3.length(difference);
            next_position_data.arc_length = current_position_data.arc_length + segment_length;
            next_position_data.t = current_position_data.t + step_size;

            this.arc_length = next_position_data.arc_length;

            //check if there is a plane intersection
            if (isOnPositiveZ) {
                //we are currently at z > 0
                if (next_position_data.position[2] < 0) {
                    isOnPositiveZ = false;
                    termination_method -= 1;
                    console.warn("multi a", this.multi);
                    this.multi.list_point_data_returns.push(current_position_data);
                    this.success = true;
                    return;//stop early
                }
            } else {
                //we are currently at z < 0
                if (next_position_data.position[2] > 0) {
                    isOnPositiveZ = true;
                    termination_method -= 1;
                    console.warn("multi b", this.multi);
                    this.multi.list_point_data_returns.push(current_position_data);
                    this.success = true;
                    return;//stop early
                }
            }

            //---------- END OF RK4 ----------
            //prepare next iteration

            current_position_data = next_position_data;
        }
    }

    build() {
        this.path = new THREE.CurvePath();
        //console.log(this.list_point_data);
        for (var point_index = 1; point_index < this.list_point_data.length; point_index++) {
            var point_data_A = this.list_point_data[point_index - 1];
            var point_data_B = this.list_point_data[point_index];
            var curve = new THREE.LineCurve3(point_data_A.getPosTHREE(), point_data_B.getPosTHREE());
            this.path.add(curve);
        }

        var radius = this.streamline_generator.simulationParameters.tube_radius;
        var num_sides = this.streamline_generator.simulationParameters.tube_num_sides;

        var tube_segment_length = this.streamline_generator.simulationParameters.tube_segment_length;
        var num_segments = Math.ceil(this.arc_length / tube_segment_length);
        num_segments = Math.min(num_segments, this.streamline_generator.simulationParameters.tube_max_segments);

        this.geometry = new THREE.TubeGeometry(this.path, num_segments, radius, num_sides, false);
        this.material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}

class MultipleReturnsStreamline {

    constructor(streamline_generator) {
        console.log("MultipleReturnsStreamline: initialize");
        this.streamline_generator = streamline_generator;
        this.simulationParameters = streamline_generator.simulationParameters;
        this.scene = streamline_generator.scene;
        this.has_data = false;
        this.initialize();
    }

    initialize() {
        this.list_streamlines = [];
        this.list_point_data_returns = [];
        var streamline = new Streamline(this.streamline_generator, this);
        this.list_streamlines.push(streamline);
    }

    recalculateWithLastParameters() {
        if(!this.has_data){
            console.warn("recalculateWithLastParameters NO DATA YET");
            return;
        }

        this.list_point_data_returns = [];
        var number_of_returns = this.simulationParameters.termination_method;
        var index = 0;

        //calculate initial streamline with last parameters
        var streamline = this.list_streamlines[index];
        streamline.calculate();
        number_of_returns -= 1;
        this.number_success = streamline.success ? 1 : 0;
        this.number_computed = 1;

        //calculate additional streamlines starting from previous end point
        while (number_of_returns > 0) {
            index += 1;
            var previous = this.list_streamlines[index - 1];
            if (!previous.success) {
                break;
            }

            if(index == this.list_streamlines.length){
                var new_streamline = new Streamline(this.streamline_generator, this);
                this.list_streamlines.push(new_streamline);
            }
            var streamline = this.list_streamlines[index];
            streamline.recalculateFromOther(previous);
            number_of_returns -= 1;
            this.number_computed += 1;
            this.number_success += streamline.success ? 1 : 0;
        }
    }


    recalculate(x, y, z, dir_x, dir_y, dir_z, energy) {
        this.list_point_data_returns = [];
        var number_of_returns = this.simulationParameters.termination_method;
        var index = 0;

        //calculate initial streamline with new parameters
        var streamline = this.list_streamlines[index];
        streamline.recalculate(x, y, z, dir_x, dir_y, dir_z, energy);
        number_of_returns -= 1;
        this.number_success = streamline.success ? 1 : 0;
        this.number_computed = 1;

        //calculate additional streamlines starting from previous end point
        while (number_of_returns > 0) {
            index += 1;
            var previous = this.list_streamlines[index - 1];
            if (!previous.success) {
                break;
            }

            if(index == this.list_streamlines.length){
                var new_streamline = new Streamline(this.streamline_generator, this);
                this.list_streamlines.push(new_streamline);
            }
            var streamline = this.list_streamlines[index];
            streamline.recalculateFromOther(previous);
            number_of_returns -= 1;
            this.number_computed += 1;
            this.number_success = streamline.success ? this.number_success+1 : this.number_success;
        }

        this.has_data = true;
    }

    updateStreamlineModels() {
        console.warn("this.number_success", this.number_success)
        for (var i = 0; i < this.list_streamlines.length; i++) {
            var streamline = this.list_streamlines[i];
            if (streamline.existsInScene) {
                this.scene.remove(streamline.mesh);
            }
            var conditio_success = i < this.number_success;
            var condition_computed = i < this.number_computed;
            var condition = this.simulationParameters.tube_only_show_successful_returns ? conditio_success : condition_computed;
            if (condition){
                streamline.build();
                this.scene.add(streamline.mesh);
                streamline.existsInScene = true;
            }
        }
    }
}

class StreamlineGenerator {

    constructor(simulationParameters, scene) {
        console.log("StreamlineGenerator: initialize");
        this.simulationParameters = simulationParameters;
        this.scene = scene;
        this.initialize();
    }

    initialize() {
        this.list_multi = [];
        var multi = new MultipleReturnsStreamline(this);
        this.list_multi.push(multi);
    }

    recalculateMulti(index, x, y, z, dir_x, dir_y, dir_z, energy) {
        console.warn("### recalculateMulti");
        this.list_multi[index].recalculate(x, y, z, dir_x, dir_y, dir_z, energy);
    }

    recalculateMultiWithLastParameters(index) {
        console.warn("### recalculateMultiWithLastParameters");
        this.list_multi[index].recalculateWithLastParameters();
    }

    updateMultiModel(index) {
        console.warn("### updateMultiModel");
        this.list_multi[index].updateStreamlineModels();
    }

    f_position(position, direction, signum) {
        var n = this.simulationParameters.angular_velocity;

        var x = position[0];
        var y = position[1];
        //var z = position[2];

        var px = direction[0];
        var py = direction[1];
        var pz = direction[2];

        //equations of motion
        var u = px + n * y;
        var v = py - n * x;
        var w = pz;

        var result = vec3.create();
        result[0] = u * signum;
        result[1] = v * signum;
        result[2] = w * signum;
        return result;
    }

    f_direction(position, direction, signum) {
        var n = this.simulationParameters.angular_velocity;
        var mu = this.simulationParameters.mu;

        var x = position[0];
        var y = position[1];
        var z = position[2];

        var px = direction[0];
        var py = direction[1];
        //var pz = direction[2];

        //helper variables
        var muplusx = mu + x;
        var muminusone = mu - 1;
        var muplusxminusone = muplusx - 1;
        var left_denominator = Math.pow((muplusxminusone * muplusxminusone + y * y + z * z), (3 / 2));
        var right_denominator = Math.pow((muplusx * muplusx + y * y + z * z), (3 / 2));

        var dphi_dx = (mu * muplusxminusone) / left_denominator - (muminusone * muplusx) / right_denominator;
        var dphi_dy = (mu * y) / left_denominator - (muminusone * y) / right_denominator;
        var dphi_dz = (mu * z) / left_denominator - (muminusone * z) / right_denominator;

        //equations of motion
        var u = n * py - dphi_dx;
        var v = -n * px - dphi_dy;
        var w = - dphi_dz;

        var result = vec3.create();
        result[0] = u * signum;
        result[1] = v * signum;
        result[2] = w * signum;
        return result;
    }

}

export { StreamlineGenerator };