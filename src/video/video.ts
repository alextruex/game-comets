import frag from './shaders/frag.glsl';
import vert from './shaders/vert.glsl';

import m3Multiply from '../math/matrix';

class DynamicShape{
    x:number = 0;
    y:number = 0;
    angle:number = 0;
    bufferIndex:number = 0;
    constructor(bufferIndex:number){
        this.bufferIndex = bufferIndex;
    }
}

class StaticShape{
    bufferIndex:number = 0;
}

class Video{
    canvas:HTMLCanvasElement;
    gl:WebGLRenderingContext;
    width:number;
    height:number;
    programs:Array<WebGLProgram> = [];
    buffers:Array<WebGLBuffer> = [];
    dShapes:Array<DynamicShape> = [];
    sShapes:Array<StaticShape> = [];
    projection:Array<number> = [];

    constructor(width:number, height:number){
        //Initialize WebGL context
        this.width = width;
        this.height = height;
        this.canvas = <HTMLCanvasElement>document.getElementById('glCanvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.imageRendering = 'optimizeSpeed';
        this.gl = <WebGLRenderingContext>this.canvas.getContext('webgl');
        this.gl.viewport(0,0,width,height);
        this.gl.clearColor(0.1, 0.0, 0.0, 1.0);

        //Load Programs
        this.addProg(vert,frag);
    }

    private addProg(vertShader:string, fragShader:string) {
        let vShader = <WebGLShader>this.gl.createShader(this.gl.VERTEX_SHADER);
        let fShader = <WebGLShader>this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(vShader, vertShader);
        this.gl.shaderSource(fShader, fragShader);
        this.gl.compileShader(vShader);
        this.gl.compileShader(fShader);
        let program = <WebGLProgram>this.gl.createProgram();
        this.gl.attachShader(program, vShader);
        this.gl.attachShader(program, fShader);
        this.gl.linkProgram(program);
        return this.programs.push(program);
    }

    public createDShape(vertices:Array<number>){
        let buffer = <WebGLBuffer>this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
        let bufferIndex = this.buffers.push(buffer) - 1;
        let dShape = new DynamicShape(bufferIndex);
        return this.dShapes.push(dShape) - 1;
    }

    public cloneDShape(index:number){
        let bufferIndex = this.dShapes[index].bufferIndex;
        let dShape = new DynamicShape(bufferIndex);
        return this.dShapes.push(dShape) - 1;
    }

    public translate(x:number, y:number, i:number){
        this.dShapes[i].x += x;
        this.dShapes[i].y += y;
    }

    public rotate(angle:number, i:number){
        this.dShapes[i].angle -= angle;
    }

    render(){
        // Clear
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        // Draw Dynamic Shapes
        this.gl.useProgram(this.programs[0]);
        for(let i = 0; i < this.dShapes.length; i++){
            let d = this.dShapes[i];
            
            // Load buffer and vertex positions
            let a_pos = this.gl.getAttribLocation(this.programs[0],'a_pos');
            this.gl.enableVertexAttribArray(a_pos);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[d.bufferIndex]);
            this.gl.vertexAttribPointer(a_pos,2,this.gl.FLOAT,false,0,0);
            
            // Generate transformation matrix
            let u_mat = this.gl.getUniformLocation(this.programs[0],'u_mat');
            
            // Calculate Translation
            let matA = m3Multiply([
                2/this.width,0,0,
                0,-2/this.height,0,
                -1,1,1
            ],[
                1,0,0,
                0,1,0,
                d.x,d.y,1
            ]);

            // Calculate Rotation
            let matB = m3Multiply(matA,[
                Math.cos(d.angle),-Math.sin(d.angle),0,
                Math.sin(d.angle),Math.cos(d.angle),0,
                0,0,1
            ]);

            this.gl.uniformMatrix3fv(u_mat,false,matB);
            
            this.gl.drawArrays(this.gl.LINES, 0, 8);
        }
        
        
    }
}

export default Video;