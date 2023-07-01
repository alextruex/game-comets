import Game from '../main';
import Player from './player';
import Meteors from './meteors';
import Planets from './planets';

class Stage{
    player:Player;
    meteors:Meteors;
    planets:Planets;
    
    constructor(game:Game){
        this.player = new Player(game);
        this.meteors = new Meteors(game);
        this.planets = new Planets(game);
    }

    update(game:Game){
        this.player.update(game);
        this.meteors.update(game);
    }
}

export default Stage;