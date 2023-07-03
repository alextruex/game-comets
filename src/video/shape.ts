class Shape {
    x: number = 0;
    y: number = 0;
    angle: number = 0;
    bufferIndex: number = 0;
    bufferSize: number = 0;
    visible: boolean = true;
    constructor(bufferIndex: number, bufferSize: number) {
        this.bufferIndex = bufferIndex;
        this.bufferSize = bufferSize;
    }
}

export default Shape;