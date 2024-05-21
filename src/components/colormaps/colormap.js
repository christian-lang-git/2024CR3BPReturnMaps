class ColorMap {

    constructor(bin_count) {
        this.bin_count = bin_count;
        this.convertArray();
        this.generateBins();
    }

    /**
     * This function returns an array specifying the color map.
     * 4 consecutive values [0,1] describe: value, red, green, blue 
     * @returns data array
     */
    getArray() {
        return []
    }

    /**
     * This function converts the array data and splits it into 2 arrays.
     * - the first array contains the values
     * - the second array contains the colors, each color is stored as an array with 3 elements 
     * @returns data array
     */
    convertArray() {
        var array = this.getArray();
        this.array_values = [];
        this.array_colors = [];
        var num_colors = array.length / 4;
        for (var i = 0; i < num_colors; i++) {
            var value = array[4 * i];
            var color = [array[4 * i + 1], array[4 * i + 2], array[4 * i + 3]];
            this.array_values.push(value);
            this.array_colors.push(color);
        }
    }

    generateBins() {
        this.bins = [];
        var startIndex = 0;
        for (var i = 0; i < this.bin_count; i++) {
            var value = i / (this.bin_count - 1);
            var lower_index = this.findLowerIndex(value, startIndex);
            if(lower_index == this.bin_count - 1){
                lower_index -= 1;
            }
            var upper_index = lower_index + 1;
            var lower_value = this.array_values[lower_index];
            var upper_value = this.array_values[upper_index];
            var lower_color = this.array_colors[lower_index];
            var upper_color = this.array_colors[upper_index];
            var diff = upper_value - lower_value;
            var t = (value - lower_value) / diff;
            var r = (1-t) * lower_color[0] + t * upper_color[0];
            var g = (1-t) * lower_color[1] + t * upper_color[1];
            var b = (1-t) * lower_color[2] + t * upper_color[2];
            var color = [r, g, b];
            this.bins.push(color);
            startIndex = lower_index;
        }
    }

    findLowerIndex(t, startIndex) {
        var index = 0;
        for (var i = 0; i < this.array_values.length; i++) {
            var value = this.array_values[i];
            if(value > t)
                break;
            index = i;
        }
        return index;
    }
}

export { ColorMap }