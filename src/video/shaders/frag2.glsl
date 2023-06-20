precision mediump float;

// our texture
uniform sampler2D u_image;
uniform vec2 u_texres;

// the texCoords passed in from the vertex shader.
varying vec2 v_tex;

void main() {
    vec3 color = (texture2D(u_image, v_tex).xyz + texture2D(u_image, v_tex - vec2(0.002,0.00)).xyz) / 2.0;

    float alpha = 1.0;
    float offsetY = mod(v_tex.y*960.0,4.0);
    float offsetX = mod(v_tex.x*1280.0,4.0);
    if(offsetY >= 0.0 && offsetY < 1.0) alpha -= 0.25;
    if(offsetX >= 0.0 && offsetX < 1.0) alpha -= 0.25;
    if(offsetY >= 1.0 && offsetY < 2.0) alpha -= 0.1;
    if(offsetX >= 1.0 && offsetX < 2.0) alpha -= 0.1;
    
    gl_FragColor = vec4(color,alpha);
}