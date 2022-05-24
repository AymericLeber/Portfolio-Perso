var img;
var smiley_sprite;
function preload() {
	img=loadImage("asset/smiley.png")
}

function setup() {
    createCanvas(600,600);
    smiley_sprite=createSprite(300,300);
    smiley_sprite.addImage(img);
}

function draw() {
	background(240,240,240);
	drawSprites();
}

function keyPressed() {
	if (keyCode == 37 ) {
		smiley_sprite.velocity.x=-5;
	}
	if (keyCode == 38 ) {
		smiley_sprite.velocity.y=-5;
	}
	if (keyCode == 39 ) {
		smiley_sprite.velocity.x=5;
	}
	if (keyCode == 40 ) {
		smiley_sprite.velocity.y=5;
	}
}

function keyReleased() {
	if (keyCode == 37 ) {
		smiley_sprite.velocity.x=-0;
	}
	if (keyCode == 38 ) {
		smiley_sprite.velocity.y=-0;
	}
	if (keyCode == 39 ) {
		smiley_sprite.velocity.x=0;
	}
	if (keyCode == 40 ) {
		smiley_sprite.velocity.y=0;
	}
}