import Game from '../game';
import {asteroid} from '../geometry/geometry';

class Meteor{
    x:number = 0;
    y:number = 0;
    xspeed:number = 0;
    yspeed:number = 0;
    active:boolean = false;
    shape:number;

    constructor(shape:number){
        this.shape = shape;
    }

    update(game:Game){
        if(this.active){
            game.video.position(this.x,this.y,this.shape);
            this.x += this.xspeed;
            this.y += this.yspeed;
    
            this.xspeed += (game.stage.planets.planets[0].x - this.x) * .0008;
            this.yspeed += (game.stage.planets.planets[0].y - this.y) * .0008;
            //this.yspeed += (this.y - game.stage.planets.planets[0].y);
        }
    }
}

class Meteors{
    pool:Array<Meteor> = [];
    index:number = 0;
    launch:boolean = false;
    launchSpeed:number = 0;

    constructor(game:Game){
        this.pool.push(new Meteor(game.video.createDShape(asteroid)));
        for(let i = 1; i < 8; i++){
            this.pool.push(new Meteor(game.video.cloneDShape(this.pool[0].shape)));
        }
    }

    update(game:Game){
        if(this.launch == false && game.input.poll(' ')) this.launch = true;
        if(this.launch == true && game.input.poll(' ') == 1){
            this.launchSpeed += .1;
        }
        if(this.launch == true && game.input.poll(' ') == 0){
            this.pool[this.index].active = true;
            this.pool[this.index].x = game.stage.player.x;
            this.pool[this.index].y = game.stage.player.y;
            this.pool[this.index].xspeed = this.launchSpeed*(Math.sin(game.stage.player.angle * (Math.PI/180)));
            this.pool[this.index].yspeed = this.launchSpeed*(-Math.cos(game.stage.player.angle * (Math.PI/180)));

            this.launch = false;
            this.launchSpeed = 0;
            
            this.index++;
            if (this.index >=8) this.index = 0;
        }

        for(let i = 0; i < this.pool.length; i++){
            this.pool[i].update(game);
        }
    }
}

export default Meteors;