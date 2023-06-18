uniform mat3 u_mat;
attribute vec2 a_pos;

void main(){
    gl_Position = vec4((u_mat * vec3(a_pos, 1)).xy,0,1);
}