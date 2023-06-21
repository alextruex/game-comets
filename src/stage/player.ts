import Game from '../main';

import { asteroid , cube, cannon } from '../geometry/geometry';

class Player{
    angle:number = 90;
    shape:number;
    y:number = 0;
    constructor(game:Game){
        this.shape = game.video.createDShape(cannon),
        
        game.video.translate(16,0,this.shape);
    }

    update(game:Game){
        let n = game.input;
        let v = game.video;
        let s = this.shape;

        if(n.poll('ArrowUp')){
            v.translate(0,-2,s);
            this.y -= 2;
        }
        if(n.poll('ArrowDown')){
            v.translate(0,2,s);
            this.y += 2;
        }
        if(n.poll('ArrowLeft')){
            v.rotate(-3*(Math.PI/180),s);
            this.angle -= 3;
        }
        if(n.poll('ArrowRight')){
            v.rotate(3*(Math.PI/180),s);
            this.angle += 3;
        }
    }
}

export default Player;