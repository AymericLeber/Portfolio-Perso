var perso;
var perso_walk;
function preload() {
	perso_walk = loadAnimation("asset/ghost_walk0001.png", "asset/ghost_walk0002.png",
	"asset/ghost_walk0003.png", "asset/ghost_walk0004.png");
	perso_wait = loadAnimation("asset/ghost_standing0001.png","asset/ghost_standing0002.png","asset/ghost_standing0003.png","asset/ghost_standing0004.png","asset/ghost_standing0005.png","asset/ghost_standing0006.png");
}
function setup() {
	createCanvas(800,300);
	perso=createSprite(400,150);
	perso.addAnimation("walk",perso_walk);
	perso.addAnimation("wait",perso_wait);
	perso.changeAnimation("wait");

}
function draw() {
	background(240,240,240);
	drawSprites();
}
function keyPressed(){
   if (keyCode==37){
   	perso.mirrorX(-1);
   	perso.changeAnimation("walk");
  }
  else if (keyCode==39){
  	perso.mirrorX(1);
  	perso.changeAnimation("walk");
  }
  else {
  	perso.changeAnimation("wait");
  }

}
function keyReleased(){
	perso.changeAnimation("wait");
}