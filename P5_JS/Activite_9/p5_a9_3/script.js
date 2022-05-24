var i=0
var x
var y
var s
var r
function setup(){
    createCanvas(600,600);
    background(240);
	while(i<50) {
		fill(0);
		x=floor(random(10,600));
		y=floor(random(10,600));
		r=floor(random(0,360));
		s=floor(random(10,30));
		push();
		translate(x,y);
		rotate(r);
		textSize(s);
		text("Hello World",0,0);
		pop();
		i=i+1;
	}
}
function draw(){
}
     