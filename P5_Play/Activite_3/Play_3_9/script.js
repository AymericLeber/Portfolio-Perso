
var img;
var imgwall;
var smiley_sprite_1;
var wall_sprite_1;
var wall_sprite_2;
var wallbreak = 0;
var wallhit = false;
function preload() {
	img=loadImage("asset/smiley.png");
	imgwall=loadImage("asset/wall.png");
}

function setup() {
    createCanvas(800,300);
    smiley_sprite_1=createSprite(100,150);
    smiley_sprite_1.addImage(img);
    smiley_sprite_1.setVelocity(5,0);
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
	if (wallbreak < 3) {
	smiley_sprite_1.bounce(wall_sprite_1,contact);
	}
	smiley_sprite_1.bounce(wall_sprite_2);
	if (wallhit == true) {
		wallbreak++;
		wallhit = false;
	}
	if (wallbreak==3) {
		wall_sprite_1.remove();
		smiley_sprite_1.overlap(wall_sprite_1,contact);
	}
	drawSprites();
}


function contact(){
	wallhit = true
}