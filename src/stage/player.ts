import Game from '../main';

import { asteroid , cube } from '../geometry/geometry';
import cannon from '../geometry/cannon';
import arrow from '../geometry/arrow';

class Player{
    angle:number = 90;
    shape:number;
    y:number = 0;
    x:number = 16;
    constructor(game:Game){
        this.shape = game.video.createDShape(cannon),
        
        game.video.translate(this.x,this.y,this.shape);
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