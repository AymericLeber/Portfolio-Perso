var img;
var smiley_sprite;
function preload() {
	img=loadImage("asset/smiley.png");
}
function setup() {
	createCanvas(800,300);
	smiley_sprite=createSprite(400,20);
	smiley_sprite.addImage(img);
}
function draw() {
	background(240,240,240);
	smiley_sprite.addSpeed(0.1,90);
	drawSprites();
}