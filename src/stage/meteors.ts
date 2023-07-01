import Game from '../game';
import {asteroid} from '../geometry/geometry';

class Meteors{
    meteors:Array<number> = [];
    xspeed:number = 1;
    yspeed:number = 0;
    x:number = 0;
    y:number = 0;
    constructor(game:Game){
        this.meteors.push(game.video.createDShape(asteroid));
        game.video.translate(64,64,this.meteors[0]);
        this.x = 64;
        this.y = 64;
    }

    update(game:Game){
        if(game.input.poll(' ')){
            game.video.position(game.stage.player.x,game.stage.player.y,this.meteors[0]);
            this.x = game.stage.player.x;
            this.y = game.stage.player.y;
            this.xspeed = Math.sin(game.stage.player.angle*(Math.PI/180))*5;
            this.yspeed = -Math.cos(game.stage.player.angle*(Math.PI/180))*5;
        }
        game.video.translate(this.xspeed,this.yspeed,1);
        this.x += this.xspeed;
        this.y += this.yspeed;
        //this.yspeed += .05;

        this.xspeed += (game.stage.planets.planets[0].x - this.x) * .0008;
        this.yspeed += (game.stage.planets.planets[0].y - this.y) * .0008;
        //this.yspeed += (this.y - game.stage.planets.planets[0].y);
    }
}

export default Meteors;