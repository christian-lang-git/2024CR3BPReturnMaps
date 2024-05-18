class SimulationParameters {
    constructor() {
        //physics
        this.mu = 0.1;//mass of secondary

        //RK4
        this.steps = 15000;
        this.step_size = 0.001;

        //cosmetics
        //camera
        this.camera_near_plane = 0.001;
        this.camera_far_plane = 25;
        //bodies
        this.scale_bodies_by_volume = true;
        this.max_radius_bodies = 0.05;
        //center of mass
        this.radius_center_of_mass = 0.01;
        //clicked position
        this.radius_clicked_position = 0.025;
        //tubes
        this.tube_radius = 0.0025;
        this.tube_num_sides = 20;
        this.tube_num_segments = 20000;

        this.print();
    }

    getPrimaryMass() {
        return (1 - this.mu);
    }

    getSecondaryMass() {
        return this.mu;
    }

    getPrimaryX() {
        return -this.mu;
    }

    getSecondaryX() {
        return (1 - this.mu);
    }

    getPrimaryRadius() {
        if (this.scale_bodies_by_volume)
            return Math.pow((3 / (4 * Math.PI) * this.getPrimaryMass()), (1 / 3)) * this.max_radius_bodies;
        else
            return this.getPrimaryMass() * this.max_radius_bodies;
    }

    getSecondaryRadius() {
        //scale by radius
        //return (this.mu) * this.max_radius_bodies;
        //scale by volume
        if (this.scale_bodies_by_volume)
            return Math.pow((3 / (4 * Math.PI) * this.getSecondaryMass()), (1 / 3)) * this.max_radius_bodies;
        else
            return this.getSecondaryMass() * this.max_radius_bodies;
    }

    getCenterOfMassRadius() {
        return this.radius_center_of_mass;
    }

    getClickedPositionRadius(){
        return this.radius_clicked_position;
    }

    getSphereVolume(radius) {
        return (4 / 3) * Math.PI * radius * radius * radius;
    }

    print() {
        var primary_radius = this.getPrimaryRadius();
        var secondary_radius = this.getSecondaryRadius();
        var primary_radius_unscaled = this.getPrimaryRadius() / this.max_radius_bodies;
        var secondary_radius_unscaled = this.getSecondaryRadius() / this.max_radius_bodies;
        var primary_volume = this.getSphereVolume(primary_radius);
        var secondary_volume = this.getSphereVolume(secondary_radius);
        var primary_volume_unscaled = this.getSphereVolume(primary_radius_unscaled);
        var secondary_volume_unscaled = this.getSphereVolume(secondary_radius_unscaled);
        console.log("primary_radius", primary_radius);
        console.log("secondary_radius", secondary_radius);
        console.log("primary_radius_unscaled", primary_radius_unscaled);
        console.log("secondary_radius_unscaled", secondary_radius_unscaled);
        console.log("primary_volume", primary_volume);
        console.log("secondary_volume", secondary_volume);
        console.log("primary_volume_unscaled", primary_volume_unscaled);
        console.log("secondary_volume_unscaled", secondary_volume_unscaled);
    }
}

export { SimulationParameters };