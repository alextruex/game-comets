import frag from './shaders/frag.glsl';
import vert from './shaders/vert.glsl';
import vert2 from './shaders/vert2.glsl';
import frag2 from './shaders/frag2.glsl';
import vert3 from './shaders/vert3.glsl';
import frag3 from './shaders/frag3.glsl';

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

class TextBoxL{
    x:number = 0;
    y:number = 0;
    text:string = "";
}

class Video{
    canvas:HTMLCanvasElement;
    gl:WebGLRenderingContext;
    width:number;
    height:number;
    programs:Array<WebGLProgram> = [];
    buffers:Array<WebGLBuffer> = [];
    textures:Array<WebGLTexture> = [];
    fBuffers:Array<WebGLFramebuffer> = [];
    dShapes:Array<DynamicShape> = [];
    sShapes:Array<StaticShape> = [];
    tBoxesL:Array<TextBoxL> = [];
    projection:Array<number> = [];
    swap:number = 0;

    constructor(width:number, height:number){
        //Initialize WebGL context
        this.width = width;
        this.height = height;
        this.canvas = <HTMLCanvasElement>document.getElementById('glCanvas');
        this.canvas.width = width*4;
        this.canvas.height = height*4;
        //this.canvas.style.imageRendering = 'optimizeSpeed';
        //this.canvas.style.imageRendering = 'optimizeLegibility';
        this.gl = <WebGLRenderingContext>this.canvas.getContext('webgl',{preserveDrawingBuffer:false,premultipliedAlpha: false });
        this.gl.clearColor(0.1, 0.0, 0.0, 1.0);    

        let buffer = <WebGLBuffer>this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            1.0,  1.0,
            -1.0,  1.0,
            -1.0, -1.0,
            // Second triangle:
            -1.0, -1.0,
             1.0, -1.0,
             1.0,  1.0]), this.gl.STATIC_DRAW);
        this.buffers.push(buffer);

        buffer = <WebGLBuffer>this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            1.0,  1.0,
            0,  1.0,
            0, 0,
            // Second triangle:
            0, 0,
            1.0, 0,
            1.0, 1.0]), this.gl.STATIC_DRAW);
        this.buffers.push(buffer);




        //Load Programs
        this.addProg(vert,frag);
        this.addProg(vert3,frag3);
        this.addProg(vert2,frag2);
        

        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

        // Logic texture 1
        this.textures[0] = <WebGLTexture>this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[0]);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0,
        this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        this.fBuffers[0] = <WebGLFramebuffer>this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[0]);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0], 0);

        const attachmentPoint1 = this.gl.COLOR_ATTACHMENT0;
        const level1 = 0;
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentPoint1, this.gl.TEXTURE_2D, this.textures[0], level1);

        // Logic texture 2
        this.textures[1] = <WebGLTexture>this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[1]);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0,
        this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        this.fBuffers[1] = <WebGLFramebuffer>this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[1]);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[1], 0);

        const attachmentPoint2 = this.gl.COLOR_ATTACHMENT0;
        const level2 = 0;
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentPoint2, this.gl.TEXTURE_2D, this.textures[1], level2);
      
  
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

    public createTBox(x:number,y:number,text:string){
        
    }

    public updateTBox(){

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
        let a = this.swap;
        let b = 1 - this.swap;

        // First we bind to our framebuffer, which has a texture attached to it
        
        //------------ Draw shapes to texture ----------------------

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
            

            //we are drawing onto our texture
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[a]);
            this.gl.viewport(0,0,this.width,this.height);
            //this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.LINES, 0, 8);

            //-------------------Draw texture to frame---------------------------

            

            this.gl.useProgram(this.programs[1]);

            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[a]);

            let a_pos2 = this.gl.getAttribLocation(this.programs[1],'a_pos');
            this.gl.enableVertexAttribArray(a_pos2);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[0]);
            this.gl.vertexAttribPointer(a_pos2,2,this.gl.FLOAT,false,0,0);

            let a_tex = this.gl.getAttribLocation(this.programs[1],'a_tex');
            this.gl.enableVertexAttribArray(a_tex);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[1]);
            this.gl.vertexAttribPointer(a_tex,2,this.gl.FLOAT,false,0,0);

            let u_res = this.gl.getUniformLocation(this.programs[1],'u_res');
            this.gl.uniform2f(u_res,this.width*4,this.height*4)

            let u_texres = this.gl.getUniformLocation(this.programs[1],'u_texres');
            this.gl.uniform2f(u_texres,this.width,this.height)

            // Where to draw
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.viewport(0,0,this.width*4,this.height*4);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            //-------------------- fade texture --------------

            this.gl.useProgram(this.programs[2]);

            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[a]);

            let a_pos3 = this.gl.getAttribLocation(this.programs[1],'a_pos');
            this.gl.enableVertexAttribArray(a_pos3);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[0]);
            this.gl.vertexAttribPointer(a_pos3,2,this.gl.FLOAT,false,0,0);

            let a_tex3 = this.gl.getAttribLocation(this.programs[1],'a_tex');
            this.gl.enableVertexAttribArray(a_tex3);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffers[1]);
            this.gl.vertexAttribPointer(a_tex,2,this.gl.FLOAT,false,0,0);

            let u_res2 = this.gl.getUniformLocation(this.programs[1],'u_res');
            this.gl.uniform2f(u_res2,this.width*4,this.height*4)

            let u_texres2 = this.gl.getUniformLocation(this.programs[1],'u_texres');
            this.gl.uniform2f(u_texres2,this.width,this.height)

            // Where to draw
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[b]);
            this.gl.viewport(0,0,this.width,this.height);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);


            this.swap = b;
        }
        
        
    }
}

export default Video;