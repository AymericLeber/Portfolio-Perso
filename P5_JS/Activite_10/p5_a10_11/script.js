var msg;
var motif;
var i;
function setup(){
    can=createCanvas(400,200);
    background(0);
    str="Bonjour le monde!";
	tab=split(str," ");
    textAlign(CENTER);
    fill(255);
    text(''+tab[2]+' '+tab[1]+' '+tab[0]+'',200,100);
}
function draw(){
}
       