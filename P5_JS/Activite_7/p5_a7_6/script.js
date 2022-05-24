function setup(){
  createCanvas(600,600);
  background(240);
  fill(255,0,0);
  rect(100,200,400,200);
}
function draw(){
}

function mousePressed(){
	if (mouseX > 100 && mouseX < 500 && mouseY > 200 && mouseY < 400) {
		fill(0,255,0);
		rect(100,200,400,200);
	}
}