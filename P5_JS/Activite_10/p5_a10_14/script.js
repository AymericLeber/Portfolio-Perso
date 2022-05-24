var str;
var tab;
function setup(){
    can=createCanvas(400,200);
    background(0);
    str="Bonjour*le*monde!";
    tab=split(str,"*");
    textAlign(CENTER);
    fill(255);
    for (i=0;i<tab.length;i=i+1){
        text(tab[i],150+30*i,100);
    }
}
function draw(){
}