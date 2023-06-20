precision mediump float;

// our texture
uniform sampler2D u_image;
uniform vec2 u_texres;

// the texCoords passed in from the vertex shader.
varying vec2 v_tex;

void main() {
   vec3 color = texture2D(u_image, v_tex).xyz;

   float alpha = 1.0;
   float offset = mod(v_tex.y*1280.0,4.0);
   if(offset >= 1.0 && offset < 3.0){
    alpha = 0.0;
   }
   
   gl_FragColor = vec4(color,alpha);
}