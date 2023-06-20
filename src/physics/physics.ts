class Circle{
    x:number = 0;
    y:number = 0;
    r:number = 0;
    xSpeed:number = 0;
    ySpeed:number = 0;

    constructor(){

    }
}

class Physics{
    circles:Array<Circle> = [];

    constructor(){

    }

    addCircle(x:number,y:number,r:number){
        return this.circles.push(new Circle());
    }
}

export default Physics;