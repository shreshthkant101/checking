class Mouse {
    constructor() {
        this.body = ellipse(mouseX, mouseY, 2);

    }
    display() {
        noFill();
        stroke(0);
        strokeWeight(1);
        ellipse(mouseX, mouseY, 2);
    }
}