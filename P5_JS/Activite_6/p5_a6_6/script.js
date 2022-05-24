var py;
var px;
var v;
var vb;
function setup(){
    createCanvas(400,400);
    noStroke();
    fill(0);
    px=random(10,200);
    v=random(2,3);
    vb=random(2,3);
	py=random(10,200);
}
function draw(){
  background(240);
  fill(255,0,0);
  ellipse(2*px,2*py,20,20);
  if (px>200 || px<2){
    v=-v;
  }  
  if (py>200 || py<2){
	vb=-vb;
  }
  px=px+v;
  py=py+vb;
}