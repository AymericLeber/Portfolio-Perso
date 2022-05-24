var perso;
var perso_walk;
function preload() {
	perso_sprite_sheet_walk = loadSpriteSheet('asset/sonic_1.png', 48, 48, 6);
}
function setup() {
	createCanvas(800,300);
	perso=createSprite(400,150);
	perso_walk=loadAnimation(perso_sprite_sheet_walk);
	perso_walk.frameDelay=4;
	perso.addAnimation("walk",perso_walk);
	perso.changeAnimation("walk");
}
function draw() {
	background(240,240,240);
	drawSprites();
}