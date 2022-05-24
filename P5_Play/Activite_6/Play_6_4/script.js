var perso;
var perso_stand;
var perso_walk;
function preload() {
	perso_sprite_sheet_walk = loadSpriteSheet('asset/sonic_1.png', 48, 48, 6);
	perso_sprite_sheet_stand = loadSpriteSheet('asset/sonic_2.png', 48, 48, 4);
}
function setup() {
	createCanvas(800,300);
	perso=createSprite(400,150);
	perso_stand=loadAnimation(perso_sprite_sheet_stand);
	perso_stand.frameDelay=4;
	perso.addAnimation("stand",perso_stand);
	perso.changeAnimation("stand");
	perso_walk=loadAnimation(perso_sprite_sheet_walk);
	perso_walk.frameDelay=4;
	perso.addAnimation("walk",perso_walk);
}
function draw() {
	background(240,240,240);
	drawSprites();
}

function keyPressed(){
	if (keyCode == 37) {
		perso.mirrorX(-1);
		perso.changeAnimation("walk");
		perso.setVelocity(-3,0);
	}
	if (keyCode == 39) {
		perso.mirrorX(1);
		perso.changeAnimation("walk");
		perso.setVelocity(3,0);
	}
}

function keyReleased(){
	perso.changeAnimation("stand");
		perso.setVelocity(0,0);
}