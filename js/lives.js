class Life {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bo = createSprite(this.x, this.y, 0, 0);

        this.image = loadImage('images/life.png');

        this.bo.scale = 0.1;
        this.visibility = 255


    }
    display() {
        noFill();
        noStroke();
        this.bo.addImage(this.image);

    }

}