var r;
function setup(){
  createCanvas(600,600);
  noStroke();
  translate(300,300);
  fill(0,255,0);
  r=10;
}
function draw(){
  background(240);
	rect(-50,-50,100,100);
}
function mousePressed(){
	fill(255,0,0);
}
function mouseReleased(){
	fill(0,255,0);
}