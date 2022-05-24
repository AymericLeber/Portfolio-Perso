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
r2=r2+0.05;
push();
rotate(r2);
cercle();
pop();
push()
translate(-50,-50);
rotate(r2);
rect(-15,-15,30,30);
pop();

}

function cercle() {
for (i=0;i<=16;i=i+1) {	
    rect(-5,0,10,50);
	ellipse(0,0,30,30);
	rotate(radians(r));
	r=r+45;
}
}