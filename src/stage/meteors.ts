import Game from '../game';
import {asteroid} from '../geometry/geometry';

class Meteors{
    meteors:Array<number> = [];
    xspeed:number = 1;
    yspeed:number = 0;
    constructor(game:Game){
        this.meteors.push(game.video.createDShape(asteroid));
        game.video.translate(64,64,this.meteors[0]);
    }

    update(game:Game){
        if(game.input.poll(' ')){
            game.video.position(0,game.stage.player.y,this.meteors[0]);
            this.xspeed = Math.sin(game.stage.player.angle*(Math.PI/180))*5;
            this.yspeed = -Math.cos(game.stage.player.angle*(Math.PI/180))*5;
        }
        game.video.translate(this.xspeed,this.yspeed,1);
        //this.yspeed += .05;
    }
}

export default Meteors;