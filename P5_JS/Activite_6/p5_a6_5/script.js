var r;
var o;
var v;
var sens=1;
function setup(){
    createCanvas(400,400);
    noStroke();
    fill(0);
	o=50;
    r=25;
    v=2;
}
function draw(){
	background(240);
  if (r>180 || r<25){
    v=-v;
  sens=-sens
  }
  r=r+v;
  if (sens>0){
	aller()
  }
  if (sens<0){
	retour()
  }
}
function aller () {
  fill(255,255,0);
  arc(2*r,200,100,100,radians(30),radians(330));
  fill(0,0,0);
  ellipse(2*r,160,10,10);
}
function retour () {
  fill(255,255,0);
  arc(2*r,200,100,100,radians(200),radians(150));
  fill(0,0,0);
  ellipse(2*r,160,10,10);
}