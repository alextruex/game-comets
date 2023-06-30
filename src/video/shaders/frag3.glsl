precision mediump float;

// our texture
uniform sampler2D u_image;
uniform vec2 u_texres;
uniform float u_random;

// the texCoords passed in from the vertex shader.
varying vec2 v_tex;

void main() {
    vec3 color = texture2D(u_image, v_tex).xyz
    + texture2D(u_image, v_tex - vec2(0.0015,0.0)).xyz/2.0
    + texture2D(u_image, v_tex - vec2(-0.0015,0.0)).xyz/2.0
    + texture2D(u_image, v_tex - vec2(0.003,0.0)).xyz/4.0
    + texture2D(u_image, v_tex - vec2(-0.003,0.0)).xyz/4.0
    + texture2D(u_image, v_tex - vec2(0.0,0.0015)).xyz/2.0
    + texture2D(u_image, v_tex - vec2(0.0,-0.0015)).xyz/2.0
    + texture2D(u_image, v_tex - vec2(0.0,0.003)).xyz/4.0
    + texture2D(u_image, v_tex - vec2(0.0,-0.003)).xyz/4.0;
    //color += texture2D(u_image, v_tex - vec2(0.0,0.002)).xyz

    //float random = u_random;
    float alpha = 1.0;
    float offsetY = mod(v_tex.y*960.0,2.0);
    float offsetX = mod(v_tex.x*1280.0,2.0);
    if(offsetY >= 0.0 && offsetY < 1.0) alpha -= 0.15;
    if(offsetX >= 0.0 && offsetX < 1.0) alpha -= 0.15;
    //if(offsetY >= 1.0 && offsetY < 2.0) alpha -= 0.15;
    //if(offsetX >= 1.0 && offsetX < 2.0) alpha -= 0.15;
    
    gl_FragColor = vec4(color.x/1.5,color.y/1.5,color.z,alpha);
}