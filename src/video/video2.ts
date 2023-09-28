import ShapeRenderer from './renderers/shaperenderer';
import CRTRenderer from './renderers/crtrenderer';

class Video{
    canvas:HTMLCanvasElement;
    gl:WebGLRenderingContext;
    width:number;
    height:number;

    shapeRenderer:ShapeRenderer;
    //crtRenderer:CRTRenderer;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
        this.canvas = <HTMLCanvasElement>document.getElementById('glCanvas');
        this.canvas.width = width * 2;
        this.canvas.height = height * 2;
        //this.canvas.style.imageRendering = 'optimizeSpeed';
        //this.canvas.style.imageRendering = 'optimizeLegibility';
        this.gl = <WebGLRenderingContext>this.canvas.getContext('webgl', { preserveDrawingBuffer: false, premultipliedAlpha: false });
        this.gl.clearColor(0.1, 0.0, 0.0, 1.0);

        this.shapeRenderer = new ShapeRenderer(this.gl,null);
    }

    render(){
        this.shapeRenderer.render();
    }
}

export default Video;