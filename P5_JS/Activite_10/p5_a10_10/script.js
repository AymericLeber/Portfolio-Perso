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
    text("Le mot n°0 est '"+tab[0]+"'",200,50);
    text("Le mot n°1 est '"+tab[1]+"'",200,100);
    text("Le mot n°2 est '"+tab[2]+"'",200,150);
}
function draw(){
}
       