var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(104,0,224);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(154,0,144);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(244,0,4);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(34,0,204);

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 9;
    ball.velocityX = 4;






    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if (block1.isTouching(ball) && ball.bounceOff(block1)) {
        ball.shapeColor=rgb(104,0,224);
        music.play();
    }

    if (block2.isTouching(ball)) {
        ball.shapeColor=rgb(154,0,144);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor=rgb(244,0,4);
        music.play();
    }

    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor=rgb(34,0,204);
        music.play();
    }

    drawSprites();



    //add condition to check if box touching surface and make it box
}
