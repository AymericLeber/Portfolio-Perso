var val;
function setup(){
  createCanvas(200,200);
  background(240);
  val=0;
}
function draw() {
  fill(val);
  rect(75, 75, 50, 50);
}

function mouseMoved()
{
  val = val + 5;
  if (val > 255) {
    val = 0;
  }
}