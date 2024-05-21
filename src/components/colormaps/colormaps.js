import * as THREE from "three";
import { ColorMapViridis } from "@/components/colormaps/colormap_viridis"

class ColorMaps {

    constructor(){
        this.initialize(256);
    }

    initialize(bin_count){
        this.bin_count = bin_count;

        this.colorMapViridis = new ColorMapViridis(bin_count);

        this.listColorMaps = [
            this.colorMapViridis,
            this.colorMapViridis
        ];

        this.generateTexture();
    }

    generateTexture(){
        const width = this.bin_count;
        const height = this.listColorMaps.length;

        // Create an array to hold the pixel data (RGBA format)
        const size = width * height;
        const data = new Float32Array(4 * size);
        var i = 0;
        for(var mapIndex=0; mapIndex<this.listColorMaps.length; mapIndex++){
            var colorMap = this.listColorMaps[mapIndex];
            for(var binIndex=0; binIndex<colorMap.bins.length; binIndex++){
                var bin = colorMap.bins[binIndex];
                data[i] = bin[0];
                data[i+1] = bin[1];
                data[i+2] = bin[2];
                data[i+3] = 1.0;
                i += 4;
            }
        }

        this.texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType);
        this.texture.needsUpdate = true;

    }

}

export { ColorMaps }