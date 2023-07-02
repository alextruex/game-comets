import Game from '../main';

import { asteroid , cube } from '../geometry/geometry';
import cannon from '../geometry/cannon';
import arrow from '../geometry/arrow';

class Player{
    angle:number = 90;
    shape:number;
    y:number = 0;
    x:number = 64;
    constructor(game:Game){
        this.shape = game.video.createDShape(cannon),        
        game.video.translate(this.x,this.y,this.shape);
    }

    update(game:Game){
        let n = game.input;
        let v = game.video;
        let s = this.shape;

        if(n.poll('ArrowUp')){
            v.translate(0,-3,s);
            this.y -= 3;
        }
        if(n.poll('ArrowDown')){
            v.translate(0,3,s);
            this.y += 3;
        }
        if(n.poll('ArrowLeft')){
            v.rotate(-4*(Math.PI/180),s);
            this.angle -= 4;
        }
        if(n.poll('ArrowRight')){
            v.rotate(4*(Math.PI/180),s);
            this.angle += 4;
        }
    }
}

export default Player;