var str;
var tab;
function setup(){
    can=createCanvas(400,200);
    background(0);
    str="toto;titi;tata";
    tab=split(str,";");
    textAlign(CENTER);
    fill(255);
    text(tab[1],200,100);
}
function draw(){
}