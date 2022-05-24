var x = 300
var y = 300
var left = 0
var up = 0
var right = 0
var down = 0

function setup(){
  createCanvas(600,600);
}
function draw(){
	if (left == 1) {
		x -= 5
	}
	if (up == 1) {
		y -= 5
	}
	if (right == 1) {
		x += 5
	}
	if (down == 1) {
		y += 5
	}
	
	if (x<26){
	left = 0
	x = 26
  }
	else if (y<26){
	up = 0
	y = 26
  }
	else if (x>574){
	right = 0
	x = 574
  }
	else if (y>574){
	down = 0
	y = 574
  }
  background(240);
  fill(0)
  ellipse(x, y, 50, 50);
}

function keyPressed(){
  if (keyCode === 37) { //left
	left = 1
  }

  if (keyCode === 38) { //up
	up = 1
  }

  if (keyCode === 39) { //right
	right = 1
  }

  if (keyCode === 40) { //down
	down = 1
  }
	
}

function keyReleased(){
  if (keyCode === 37) { //left
	left = 0
  }

  if (keyCode === 38) { //up
	up = 0
  }

  if (keyCode === 39) { //right
	right = 0
  }


  if (keyCode === 40) { //down
	down = 0
  }
	
}