class Cloud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.b = createSprite(this.x, this.y, 0, 0);

        this.image = loadImage('images/cloud.png');
        this.b.scale = random(0.3, 0.6);

    }
    display() {
        this.b.addImage(this.image);

    }

}