attribute vec2 a_pos;
attribute vec2 a_tex;

uniform vec2 u_res;

varying vec2 v_tex;

void main() {
   gl_Position = vec4(a_pos, 0, 1);

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_tex = a_tex;
}