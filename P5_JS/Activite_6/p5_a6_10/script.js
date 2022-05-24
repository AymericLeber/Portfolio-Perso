var r
function setup(){
    createCanvas(600,600);
	translate(300,300);
	r=0;
}
function draw(){
	background(240);
	r=r+0.05;
	rotate(r);
	fill(0,255,0);
	ellipse(0,0,300,300);
	line(-20,0,20,0);
	line(0,-20,0,20);
	line(-40,-80,40,-80);
	line(-40,-100,40,-100);
	fill(255,0,0);
	ellipse(-80,70,30,50)
	ellipse(80,70,30,50)
}