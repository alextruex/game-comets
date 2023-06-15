uniform vec2 u_res;
uniform mat3 u_mat;
attribute vec2 a_pos;

void main(){
    vec3 matPos = u_mat * vec3(a_pos,1);
    vec2 clip2 = matPos.xy / u_res;
    vec2 clip1 = clip2 * 2.0;
    vec2 clipPos = clip1 - 1.0;

    gl_Position = vec4(clipPos * vec2(1,-1),0,1);
}