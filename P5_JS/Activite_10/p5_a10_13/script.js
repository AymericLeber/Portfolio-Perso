var str;
var tab;
function setup(){
    can=createCanvas(400,200);
    background(0);
    tab=["toto","titi","tata"];
    str=join(tab,";");
    textAlign(CENTER);
    fill(255);
    text(str,200,100);
}
function draw(){
}