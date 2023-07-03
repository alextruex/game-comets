import Game from '../main';
import Shape from '../video/shape';

import cannon from '../geometry/cannon';

class Player{
    shape:Shape;
    constructor(game:Game){
        this.shape = game.video.addShape(cannon),        
        this.shape.x = 64;
        this.shape.y = 0;
        this.shape.angle = 0;
    }

    update(game:Game){
        let n = game.input;

        if(n.poll('ArrowUp')){
            this.shape.y -= 3
        }
        if(n.poll('ArrowDown')){
            this.shape.y += 3;
        }
        if(n.poll('ArrowLeft')){
            this.shape.angle += 4;
        }
        if(n.poll('ArrowRight')){
            this.shape.angle -= 4;
        }
        
    }
}

export default Player;