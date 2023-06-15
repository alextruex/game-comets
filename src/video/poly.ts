import Mat3 from '../math/mat3';
import Vec2 from '../math/vec2';

class Poly{
    verts:Array<Vec2>;
    mat:Mat3;
    constructor(verts:Array<Vec2>){
        this.verts = verts;
        this.mat = new Mat3();
    }
}

export default Poly;