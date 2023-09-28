import Video from '../video2';
import Shape from '../../geometry/shape';

class ShapeRenderer {
    constructor(gl: WebGLRenderingContext, fb: null | WebGLFramebuffer) {
        let vShader = <WebGLShader>gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vShader, '' +
            'uniform mat3 u_mat;' +
            'attribute vec2 a_pos;' +
            'void main(){' +
            'gl_Position = vec4((u_mat * vec3(a_pos, 1)).xy,0,1);' +
            '}');
        gl.compileShader(vShader);

        let fShader = <WebGLShader>gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fShader, '' +
            'precision mediump float;' +
            'void main() {' +
            'gl_FragColor = vec4(1,1,1,1);' +
            '}');
        gl.compileShader(fShader);

        let program = <WebGLProgram>gl.createProgram();
        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);
    }

    render(){
        
    }
}

export default ShapeRenderer;