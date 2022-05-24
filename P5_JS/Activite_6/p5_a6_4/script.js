var r;
var v;
function setup(){
    createCanvas(400,400);
    noStroke();
    fill(0);
    r=2;
    v=2;
}
function draw(){
  background(240);
  fill(255,0,0);
  ellipse(2*r,200,20,20);
  if (r>200 || r<2){
    v=-v;
  }
  r=r+v;
}