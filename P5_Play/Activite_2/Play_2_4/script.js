var img;
var smiley_sprite;
function preload() {
	img=loadImage("asset/smiley.png")
}

function setup() {
    createCanvas(800,300);
    smiley_sprite=createSprite(0,150);
    smiley_sprite.addImage(img);
}

function draw() {
	background(240);
	smiley_sprite.position.x=smiley_sprite.position.x+5
	drawSprites();
}