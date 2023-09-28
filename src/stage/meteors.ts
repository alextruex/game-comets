import Game from '../game';
import {asteroid} from '../geometry/poly/poly';
import Shape from '../video/shape';

class Meteor{
    xspeed:number = 0;
    yspeed:number = 0;
    active:boolean = false;
    shape:Shape;

    constructor(shape:Shape){
        this.shape = shape;
        this.shape.visible = false;
    }

    update(game:Game){
        let cR = 8 + 64;
        let distanceX = Math.abs(this.shape.x - 320);
        let distanceY = Math.abs(this.shape.y - 240);
        let distanceH = Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY,2));

        if(distanceH < cR){
            this.active=false;
            this.shape.visible=false;
        }
        
        if(this.active){
            this.shape.x += this.xspeed;
            this.shape.y += this.yspeed;
            this.xspeed += (320 - this.shape.x) * .0008;
            this.yspeed += (240 - this.shape.y) * .0008;
        }

        
    }
}

class Meteors{
    pool:Array<Meteor> = [];
    index:number = 0;
    launch:boolean = false;
    launchSpeed:number = 0;

    constructor(game:Game){
        this.pool.push(new Meteor(game.video.addShape(asteroid)));
        for(let i = 1; i < 8; i++){
            this.pool.push(new Meteor(game.video.cloneShape(this.pool[0].shape)));
        }
    }

    update(game:Game){
        let pS = game.stage.player.shape;

        if(this.launch == false && game.input.poll(' ')) this.launch = true;
        if(this.launch == true && game.input.poll(' ') == 1){
            this.pool[this.index].yspeed = 0
            this.pool[this.index].xspeed = 0
            this.pool[this.index].shape.visible = true;
            this.launchSpeed += .1;
            this.pool[this.index].shape.x = pS.x + (this.launchSpeed * 3 - 10 )* -Math.cos(pS.angle*Math.PI/180);
            this.pool[this.index].shape.y = pS.y + (this.launchSpeed * 3 - 10 )* Math.sin(pS.angle*Math.PI/180);
        }
        if(this.launch == true && game.input.poll(' ') == 0){
            this.pool[this.index].active = true;
            this.pool[this.index].shape.x = pS.x;
            this.pool[this.index].shape.y = pS.y;
            this.pool[this.index].xspeed = this.launchSpeed*(Math.cos(pS.angle*Math.PI/180));
            this.pool[this.index].yspeed = this.launchSpeed*(-Math.sin(pS.angle*Math.PI/180));

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