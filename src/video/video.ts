import frag from './shaders/frag.glsl';
import vert from './shaders/vert.glsl';

import mat3 from '../math/mat3';

class Poly{
    verts:Array<number>;
    constructor(verts:Array<number>){
        this.verts = verts;
    }
}

class Smallpt{

}

class Largept{

}

class Video{
    canvas:HTMLCanvasElement;
    gl:WebGLRenderingContext;
    width:number;
    height:number;
    progs:Record<string,WebGLProgram>;
    buffers:Record<string,WebGLBuffer>;
    polys:Array<Poly>;

    constructor(width:number, height:number){
        //Initialize WebGL context
        this.width = width;
        this.height = height;
        this.canvas = <HTMLCanvasElement>document.getElementById('glCanvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.imageRendering = 'optimizeSpeed';
        this.gl = <WebGLRenderingContext>this.canvas.getContext('webgl');
        this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
        this.gl.clearColor(0.1, 0.0, 0.0, 1.0);

        //Load Programs
        this.progs = {};
        this.addProg('prog',vert,frag);

        //Load Buffer
        this.buffers = {};
        this.addBuffer('buffPos',[
            0,0,
            32,0,
            32,32,
            32,32,
            0,32,
            0,0
        ]);

        this.polys = [];
    }

    private addTexture(file:string){
        let image:HTMLImageElement = new Image();
        image.src = 'img/' + file + '.jpg';
        image.onload = () =>{
            let texture:WebGLTexture = <WebGLTexture>this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
            this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,image);
        };
    }
    
    private addProg(progName:string, vertShader:string, fragShader:string) {
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
        this.progs[progName] = program;
    }

    private addBuffer(bufferName:string, data:Array<number>){
        let buffer = <WebGLBuffer>this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
        this.buffers[bufferName] = buffer;
    }

    private setProg(prog:string){
        this.gl.useProgram(this.progs[prog]);
    }

    private setAttr(prog:string, attr:string, size:number, buffer:string){
        let index = this.gl.getAttribLocation(this.progs[prog],attr);
        this.gl.enableVertexAttribArray(index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[buffer]);
        this.gl.vertexAttribPointer(index,size,this.gl.FLOAT,false,0,0);
    }

    private setUnif(prog:string, unif:string, type:string, data:Array<number>){
        let index = this.gl.getUniformLocation(this.progs[prog],unif);
        if(type == 'vec'){
            if(data.length == 1) this.gl.uniform1f(index,data[0]);
            if(data.length == 2) this.gl.uniform2f(index,data[0],data[1]);
            if(data.length == 3) this.gl.uniform3f(index,data[0],data[1],data[2]);
            if(data.length == 4) this.gl.uniform4f(index,data[0],data[1],data[2],data[4]);
        }
        if(type == 'mat'){
            if(data.length == 9) this.gl.uniformMatrix3fv(index,false,data);
        }

    }

    private clear(){
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public addCube(x:number,y:number,r:number){
        
    }

    render(){
        this.clear();
        this.setProg('prog');
        this.setAttr('prog','a_pos',2,'buffPos');
        this.setUnif('prog','u_res','vec',[this.width,this.height]);
        //this.setUnif('prog','u_mat','mat',this.matrix);
        this.gl.drawArrays(this.gl.LINE_STRIP, 0, 6);
    }
}

export default Video;