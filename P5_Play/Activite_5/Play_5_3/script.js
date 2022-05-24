var img;
var smiley_sprite;
var sol;
function preload() {
	img=loadImage("asset/smiley.png");
}

function setup() {
	createCanvas(800,300);
	smiley_sprite=createSprite(400,30);
	smiley_sprite.addImage(img);
	sol=createSprite(400,305,800,10);
	sol.immovable=true;
}

function draw() {
	background(240,240,240);
	smiley_sprite.addSpeed(0.2, 90);
	smiley_sprite.bounce(sol,frottement);
	drawSprites();
}
function frottement(){
	smiley_sprite.addSpeed(2,90);
}