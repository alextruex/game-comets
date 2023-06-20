import Game from '../main';

import { asteroid , cube } from '../geometry/geometry';

class Player{
    angle:number;
    shape:number;
    constructor(game:Game){
        this.shape = game.video.createDShape(cube),
        this.angle = 90;
    }

    update(game:Game){
        let n = game.input;
        let v = game.video;
        let s = this.shape;

        if(n.poll('ArrowRight')){
            v.translate(2,0,s);
        }
        if(n.poll('ArrowLeft')){
            v.translate(-2,0,s);
        }
        if(n.poll('ArrowUp')){
            v.translate(0,-2,s);
        }
        if(n.poll('ArrowDown')){
            v.translate(0,2,s);
        }
        if(n.poll('a')){
            v.rotate(-.1,s);
        }
        if(n.poll('d')){
            v.rotate(.1,s);
        }
    }
}

export default Player;