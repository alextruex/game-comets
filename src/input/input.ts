class Input{
    map:Record<string,number>;
    canvas:HTMLCanvasElement;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById("glCanvas");
        this.map = {
            mouseX:0,
            mouseY:0
        };
        document.addEventListener('keydown',(e) => {
            this.map[e.key] = 1;
        });
        document.addEventListener('keyup',(e) => {
            this.map[e.key] = 0;
        });
        document.addEventListener('mousemove',(e) => {
            let mouseX = Math.round((e.clientX - this.canvas.offsetLeft) * (this.canvas.width / this.canvas.clientWidth)); 
            let mouseY = Math.round((e.clientY - this.canvas.offsetTop) * (this.canvas.height / this.canvas.clientHeight));
            this.map['mouseX'] = mouseX;
            this.map['mouseY'] = mouseY;
        });
        document.addEventListener('mousedown', (e) => {
            this.map['mouse1'] = 1;
        });
        document.addEventListener('mouseup', (e) => {
            this.map['mouse1'] = 0;
        });
    }

    poll(key:string){
        return this.map[key];
    }
}

export default Input;