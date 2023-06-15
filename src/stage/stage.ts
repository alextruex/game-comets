import Game from '../main';
import Player from './player';

class Stage{
    player:Player;
    
    constructor(game:Game){
        this.player = new Player(game);
    }

    update(game:Game){
        this.player.update(game);
    }
}

export default Stage;