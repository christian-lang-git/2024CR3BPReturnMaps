const glsl = x => x[0];
const SHADER_MODULE_TEXTURE_ACCESS = glsl`

    // x_virtual, y_virtual: which virtual texture is used?
    // component: the index to access the element of the vec4
    float InterpolateScalar(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component){
        
        int x_offset = int(planeDimensionsPixel.x) * x_virtual;
        int y_offset = int(planeDimensionsPixel.y) * y_virtual;

        float dx = 1.0 / (planeDimensionsPixel.x-1.0);
        float dy = 1.0 / (planeDimensionsPixel.y-1.0);

        float x = x_frac;
        float y = y_frac;

        int i = int(floor(x / dx));
        int j = int(floor(y / dy));

        float t_x = (x - (float(i) * dx)) / dx;
        float t_y = (y - (float(j) * dy)) / dy;

        float v_00 = texelFetch(texture, ivec3(i+0+x_offset, j+0+y_offset, z_layer), 0)[component];
        float v_01 = texelFetch(texture, ivec3(i+0+x_offset, j+1+y_offset, z_layer), 0)[component];
        float v_10 = texelFetch(texture, ivec3(i+1+x_offset, j+0+y_offset, z_layer), 0)[component];
        float v_11 = texelFetch(texture, ivec3(i+1+x_offset, j+1+y_offset, z_layer), 0)[component];

        //interpolate 2 points along y axis using t_y
        float v_0 = mix(v_00, v_01, t_y);
        float v_1 = mix(v_10, v_11, t_y);

        //interpolate 1 points along x axis using t_x
        float v = mix(v_0, v_1, t_x);
        
        return v;
    }

    // x_virtual, y_virtual: which virtual texture is used?
    // component: the index to access the element of the vec4
    vec4 InterpolateVec4(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer){
        
        int x_offset = int(planeDimensionsPixel.x) * x_virtual;
        int y_offset = int(planeDimensionsPixel.y) * y_virtual;

        float dx = 1.0 / (planeDimensionsPixel.x-1.0);
        float dy = 1.0 / (planeDimensionsPixel.y-1.0);

        float x = x_frac;
        float y = y_frac;

        int i = int(floor(x / dx));
        int j = int(floor(y / dy));

        float t_x = (x - (float(i) * dx)) / dx;
        float t_y = (y - (float(j) * dy)) / dy;

        vec4 v_00 = texelFetch(texture, ivec3(i+0+x_offset, j+0+y_offset, z_layer), 0);
        vec4 v_01 = texelFetch(texture, ivec3(i+0+x_offset, j+1+y_offset, z_layer), 0);
        vec4 v_10 = texelFetch(texture, ivec3(i+1+x_offset, j+0+y_offset, z_layer), 0);
        vec4 v_11 = texelFetch(texture, ivec3(i+1+x_offset, j+1+y_offset, z_layer), 0);

        //interpolate 2 points along y axis using t_y
        vec4 v_0 = mix(v_00, v_01, t_y);
        vec4 v_1 = mix(v_10, v_11, t_y);

        //interpolate 1 points along x axis using t_x
        vec4 v = mix(v_0, v_1, t_x);
        
        return v;
    }

    float InterpolateScalarWrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component){
        return forward ? InterpolateScalar(displayedTexture, x_frac, y_frac, x_virtual, y_virtual, z_layer, component)
        : InterpolateScalar(displayedTextureBackwards, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
    }

    vec4 InterpolateVec4Wrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer){
        return forward ? InterpolateVec4(displayedTexture,x_frac, y_frac, x_virtual, y_virtual, z_layer)
        : InterpolateVec4(displayedTextureBackwards,x_frac, y_frac, x_virtual, y_virtual, z_layer);
    }

`;

export { SHADER_MODULE_TEXTURE_ACCESS }