function setup(){
  createCanvas(600,600);
  background(240);
}
function draw() {

}

function mouseDragged()
{
  line(pmouseX,pmouseY,mouseX,mouseY);
}