function setup(){
  createCanvas(400,400);
  noStroke();
  background(240);
  var r;
  var g;
  var b;
}
function draw(){
	r=random(0,255)
	g=random(0,255)
	b=random(0,255)
}

function mousePressed(){
	fill(r,g,b)
  rect(mouseX-15,mouseY-15,30,30);
}