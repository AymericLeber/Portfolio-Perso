var msg;
var motif;
var i;
function setup(){
    can=createCanvas(400,200);
    background(0);
    msg="Bonjour le monde!";
    motif="Atlas";
    i=msg.indexOf(motif);
    textAlign(CENTER);
    fill(255);
    text("le début du motif '"+motif+"' se situe à l'index "+i,200,100);
}
function draw(){
}
       