var groundImg, invisibleGround;
var ground;
var mario_stand, mario, cloudimg, clouds, mario_walkanim, bgi;
var gameState;
var clouds;
var cl1, cl2, cl3;
var lives;
var l1, l2, l3;
var dist;
var l;

function preload() {
    bgi = loadImage('images/bg.jpg');
    groundImg = loadImage('images/ground.png');
    mario_stand = loadImage('images/st.png');
    cloudimg = loadImage('images/cloud.png');

    mario_walkanim = loadAnimation('images/st.png', 'images/ju.png');
}

function setup() {
    var canvas = createCanvas(800, 600);
    canvas.parent('#canv');
    if (displayWidth <= 281.196850394) {
        tint(255, 255, 255, 0);
    }


    ground = createSprite(400, 565, 1280, 80);
    ground.addImage(groundImg);
    ground.scale = 1;



    mario = createSprite(400, 550, 30, 80);
    mario.addImage(mario_stand);
    mario.scale = 0.089;



    dist = 0;

    clouds = [];

    cl1 = new Cloud(100, random(20, 150));
    cl2 = new Cloud(400, random(20, 150));
    cl3 = new Cloud(700, random(20, 150));

    lives = 3;
    l = new Mouse();
    gameState = "standing";


}

function draw() {
    background(bgi);

    if (keyDown(RIGHT_ARROW)) {
        right();
        gameState = "moving";
        dist++;
    } else {
        gameState = "standing";
    }
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    mario.collide(ground);

    mario.velocityY += 0.3;

    if (gameState == "moving") {
        if (frameCount % 180 == 0) {
            clouds.push(new Cloud(820, random(20, 150)));
        }
    }
    for (var k = 0; k < clouds.length; k++) {
        clouds[k].display();
    }

    for (var m = 0; m < clouds.length; m++) {
        if (clouds[m].x < 200) {
            clouds[m].remove();

        }

    }
    if (mario.y <= 290) {
        mario.y += 10;
        mario.velocityY = 3;
    }
    noFill();

    l.display();

    cl1.display();
    cl2.display();
    cl3.display();


    drawSprites();
}



function keyPressed() {
    if (keyCode == UP_ARROW) {

        if (mario.y >= 480) {
            up();
        }
    }
}

function up() {

    mario.velocityY = -15;

}

function right() {
    ground.x -= 5;
    mario.addAnimation("anim", mario_walkanim);
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].b.x -= 2;
    }
    cl1.b.x -= 2;
    cl2.b.x -= 2;
    cl3.b.x -= 2;



}