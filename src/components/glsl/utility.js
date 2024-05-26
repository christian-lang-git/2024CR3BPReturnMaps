const glsl = x => x[0];
const SHADER_MODULE_UTILITY = glsl`

vec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

vec4 map4(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

mat3 BuildJacoby(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = sample_jacoby_direction_x;
    matrix[1] = sample_jacoby_direction_y;
    matrix[2] = sample_jacoby_direction_z;
    return matrix;
}

mat3 BuildHessian(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    //the hessian is the transpose of the jacobian of the gradient
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = vec3(sample_jacoby_direction_x.x, sample_jacoby_direction_y.x, sample_jacoby_direction_z.x);
    matrix[1] = vec3(sample_jacoby_direction_x.y, sample_jacoby_direction_y.y, sample_jacoby_direction_z.y);
    matrix[2] = vec3(sample_jacoby_direction_x.z, sample_jacoby_direction_y.z, sample_jacoby_direction_z.z);
    return matrix;
}

mat3 BuildHessianForceSym(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    //the hessian is the transpose of the jacobian of the gradient
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = 0.5 * (sample_jacoby_direction_x + vec3(sample_jacoby_direction_x.x, sample_jacoby_direction_y.x, sample_jacoby_direction_z.x));
    matrix[1] = 0.5 * (sample_jacoby_direction_y + vec3(sample_jacoby_direction_x.y, sample_jacoby_direction_y.y, sample_jacoby_direction_z.y));
    matrix[2] = 0.5 * (sample_jacoby_direction_z + vec3(sample_jacoby_direction_x.z, sample_jacoby_direction_y.z, sample_jacoby_direction_z.z));
    return matrix;
}

vec3 computeCentralDifference(sampler3D texture, ivec3 pointer, ivec3 offset_backward, ivec3 offset_forward, float h){
    vec3 backward = texelFetch(texture_seeds_and_returns, pointer+offset_backward, 0).xyz;
    vec3 forward = texelFetch(texture_seeds_and_returns, pointer+offset_forward, 0).xyz;
    return (forward - backward) / (2.0*h); 
}

vec3 computeForwardDifference(sampler3D texture, ivec3 pointer, ivec3 offset_forward, float h){
    vec3 value = texelFetch(texture_seeds_and_returns, pointer, 0).xyz;
    vec3 forward = texelFetch(texture_seeds_and_returns, pointer+offset_forward, 0).xyz;
    return (forward - value) / h; 
}

vec3 computeBackwardDifference(sampler3D texture, ivec3 pointer, ivec3 offset_backward, float h){
    vec3 backward = texelFetch(texture_seeds_and_returns, pointer+offset_backward, 0).xyz;
    vec3 value = texelFetch(texture_seeds_and_returns, pointer, 0).xyz;
    return (value - backward) / h; 
}

`;

export { SHADER_MODULE_UTILITY }