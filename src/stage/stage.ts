import Game from '../main';
import Player from './player';
import Meteors from './meteors';

class Stage{
    player:Player;
    meteors:Meteors;
    
    constructor(game:Game){
        this.player = new Player(game);
        this.meteors = new Meteors(game);
        game.video.addCircle(320,240,64);
    }

    update(game:Game){
        this.player.update(game);
        this.meteors.update(game);
    }
}

export default Stage;