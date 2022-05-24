var i=0
var b=100
function setup() 
{
    createCanvas(600,600);
    background(240);
while (b<400) {
for (i=0;i<=200;i=i+1) {
	stroke(0,0,255);
    point(i,b);
}
for (i=200;i<=400;i=i+1) {
	stroke(255,255,255);
    point(i,b);
}
for (i=400;i<=600;i=i+1) {
	stroke(255,0,0);
    point(i,b);
}
for (i=600;i>=1;i=i-600) {
b=b+1
}
}
}
function draw() 
{

}