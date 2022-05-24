function setup(){
    createCanvas(600,600);
    background(240);
for (i=0;i<=100;i=i+1){
	var taille=random(20,50);
	var r=random(0,355);
	var g=random(0,355);
	var b=random(0,355);
	var spawnx=random(50,550);
	var spawny=random(50,550);
	noStroke();
	fill(r,g,b,r);
	ellipse(spawnx,spawny,taille,taille)
}
}
function draw(){

}