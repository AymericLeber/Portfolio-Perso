var perso;
var perso_walk;
function preload() {
	perso_walk = loadAnimation("asset/ghost_walk0001.png", "asset/ghost_walk0002.png",
	"asset/ghost_walk0003.png", "asset/ghost_walk0004.png");
}
function setup() {
	createCanvas(800,300);
	perso=createSprite(400,150);
	perso.addAnimation("walk",perso_walk);
	perso.changeAnimation("walk");

}
function draw() {
	background(240,240,240);
	drawSprites();
}