precision mediump float;

varying vec2 v_tex;

uniform sampler2D u_texture;



void main() {
  vec4 color = texture2D(u_texture, v_tex);
  gl_FragColor = mix(color, vec4(0.0,0.0,0.0,1.0), 0.1);
}