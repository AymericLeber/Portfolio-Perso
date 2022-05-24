var rpy; // coordonnée red y
var rpx; // coordonnée red x
var rvx; // vitesse red x
var rvy; // vitesse red y
var gpy; // coordonnée green y
var gpx; // coordonnée green x
var gvx; // vitesse green x
var gvy; // vitesse green y
function setup(){
    createCanvas(400,400);
    noStroke();
    fill(0);
    rvx=random(2,3);
    rvy=random(2,3);
    rpx=random(10,200);
	rpy=random(10,200);
    gvx=random(2,3);
    gvy=random(2,3);
    gpx=random(10,200);
	gpy=random(10,200);
}
function draw(){
  background(240);
  
  fill(255,0,0); // boule rouge spawn
  ellipse(2*rpx,2*rpy,20,20);
  if (rpx>200 || rpx<2){
    rvx=-rvx;
  }  
  if (rpy>200 || rpy<2){
	rvy=-rvy;
  }
  rpx=rpx+rvx;
  rpy=rpy+rvy;
  
  fill(0,255,0); // boule verte spawn
  ellipse(2*gpx,2*gpy,20,20);
  if (gpx>200 || gpx<2){
    gvx=-gvx;
  }  
  if (gpy>200 || gpy<2){
	gvy=-gvy;
  }
  gpx=gpx+gvx;
  gpy=gpy+gvy;
}