function setup(){
  createCanvas(300,300);
  background(240);
  fill(255);
  rect(100,100,100,100);
}
function draw(){
}
function keyPressed(){
	if (keyCode==82){
		fill(255,0,0);
		rect(100,100,100,100);		
	}
	else if (keyCode==86){
		fill(0,255,0);
		rect(100,100,100,100);		
	}
	else if (keyCode==66){
		fill(0,0,255);
		rect(100,100,100,100);		
	}
}

function keyReleased(){
  fill(255);
  rect(100,100,100,100);
}