
var img;
var imgwall;
var smiley_sprite_1;
var wall_sprite_1;
var wall_sprite_2;
function preload() {
	img=loadImage("asset/smiley.png");
	imgwall=loadImage("asset/wall.png");
}

function setup() {
    createCanvas(800,300);
    smiley_sprite_1=createSprite(100,150);
    smiley_sprite_1.addImage(img);
    smiley_sprite_1.setVelocity(3,0);
    smiley_sprite_1.mass=1;
    wall_sprite_1=createSprite(750,150);
    wall_sprite_1.addImage(imgwall);
    wall_sprite_1.immovable=true;
    wall_sprite_2=createSprite(50,150);
    wall_sprite_2.addImage(imgwall);
    wall_sprite_2.immovable=true;
}

function draw() {
	background(240,240,240);
	smiley_sprite_1.bounce(wall_sprite_1);
	smiley_sprite_1.bounce(wall_sprite_2);
	drawSprites();
}