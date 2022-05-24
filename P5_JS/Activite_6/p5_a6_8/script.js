var r2
var r
function setup(){
    createCanvas(600,600);
	translate(300,300);
	r2=0;
	r=0;
}
function draw(){
background(0);
rotate(r2);
r2=r2+0.05;
push();
dessin();
pop();
}

function dessin() {
for (i=0;i<=16;i=i+1) {	
    rect(-5,0,10,50);
	ellipse(0,0,30,30);
	rotate(radians(r));
	r=r+45;
}
}