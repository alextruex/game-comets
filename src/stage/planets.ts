import Game from '../main';

import { asteroid , cube } from '../geometry/geometry';
import cannon from '../geometry/cannon';
import arrow from '../geometry/arrow';

class Planet{
    x:number;
    y:number;
    r:number;
    constructor(x:number,y:number,r:number){
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

class Planets{
    planets:Array<Planet> = [];
    constructor(game:Game){
        this.planets.push(new Planet(240,240,48));
    }

    update(game:Game){

    }
}

export default Planets;