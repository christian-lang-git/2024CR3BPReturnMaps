const glsl = x => x[0];
const SHADER_MODULE_TEXTURE_ACCESS_DECLARATIONS = glsl`

    float InterpolateScalar(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);
    float InterpolateScalarWrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4Wrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);

`;

export { SHADER_MODULE_TEXTURE_ACCESS_DECLARATIONS }