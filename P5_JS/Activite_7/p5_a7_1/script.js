var r;
function setup(){
  createCanvas(400,400);
  noStroke();
  fill(0);
  r=10;
}
function draw(){
  background(240);
  ellipse(200,200,2*r,2*r);
}
function mousePressed(){
  if (r<200){
    r=r+5;
  }
}