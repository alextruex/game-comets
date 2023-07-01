import Video from './video/video';
import Input from './input/input';
import Stage from './stage/stage';

class Game{
    video:Video;
    input:Input;
    stage:Stage;

    constructor(){
        this.video = new Video(640,480);
        this.input = new Input();
        this.stage = new Stage(this);

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