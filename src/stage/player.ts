import Game from '../main';

class Player{
    angle:number;
    constructor(game:Game){
        this.angle = 90;
    }

    update(game:Game){
        let n = game.input;
        if(n.poll('ArrowLeft')){
            this.angle -= 1;
        }
        if(n.poll('ArrowRight')){
            this.angle += 1;
        }
    }
}

export default Player;