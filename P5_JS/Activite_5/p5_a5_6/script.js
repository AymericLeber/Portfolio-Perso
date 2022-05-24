var r=45
function setup(){
    createCanvas(600,600);
    background(240);
	translate(300,300);
for (i=0;i<=8;i=i+1) {
    rect(-5,0,10,50);
	ellipse(0,0,30,30);
	rotate(radians(r));
	r=r+45;
}
}
function draw(){

}