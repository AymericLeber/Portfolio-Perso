var img;
var smiley_sprite;
function preload() {
	img=loadImage("asset/smiley.png")
}

function setup() {
    createCanvas(800,300);
    smiley_sprite=createSprite(0,150);
    smiley_sprite.addImage(img);
    smiley_sprite.setVelocity(2,0);
}

function draw() {
	background(240,240,240);
	drawSprites();
}