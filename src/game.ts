import Video from './video/video';
import Input from './input/input';
import Stage from './stage/stage';
import Physics from './physics/physics';

class Game{
    video:Video;
    input:Input;
    stage:Stage;
    physics:Physics;

    constructor(){
        this.video = new Video(320,240);
        this.input = new Input();
        this.stage = new Stage(this);
        this.physics = new Physics();

        requestAnimationFrame(() => {
            this.main();
        });
    }

    main(){
        this.stage.update(this);
        this.video.render();
        requestAnimationFrame(() => {
            this.main();
        });
    }
}

export default Game;