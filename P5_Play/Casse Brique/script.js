var img;
var img2;
var barre_sprite;
var balle_sprite;
var balle2_sprite;
var briqueskin;
var bgimg;
var brique
var group_brique;
var start = false;
var vie3skin, vie2skin, vie1skin, vie, vienumb=6;
var score = 0, cheat = 0, briquecompt=0, x=100, xballe, vitesse = 8, powerupactivate = 0, powerups = 0, time = 0, balle2activate = true, xballe2;

function preload() { //Charge les images
	img=loadImage("asset/raquette.png")
	img2=loadImage("asset/balle.png")
	briqueskin=loadImage("asset/briquesafe.png")
	bgimg=loadImage("asset/background.png")
	vie3skin=loadImage("asset/vie_3.png")
	vie2skin=loadImage("asset/vie_2.png")
	vie1skin=loadImage("asset/vie_1.png")
}

function setup() {		//Setup les fonctions au moment du chargement de la page
    createCanvas(800,600);
	
    group_brique=new Group();			//création des briques
    for (i=0;i<7;i=i+1){
        var brique;
        brique=createSprite(x,20);		
        brique.addImage(briqueskin);
        group_brique.add(brique);
		brique.immovable=true;
		x=x+100;
		briquecompt = briquecompt + 1;
	}
	for (i=7;i<8;i=i+1) {
		x=200;
	}
	for (i=8;i<13;i=i+1){
		var brique;
        brique=createSprite(x,40);
        brique.addImage(briqueskin);
        group_brique.add(brique);
		brique.immovable=true;
		x=x+100;
		briquecompt = briquecompt + 1;
	}
	for (i=13;i<14;i=i+1) {
		x=300;
	}
	for (i=14;i<17;i=i+1){
		var brique;
        brique=createSprite(x,60);
        brique.addImage(briqueskin);
        group_brique.add(brique);
		brique.immovable=true;
		x=x+100;
		briquecompt = briquecompt + 1;
	}
	for (i=17;i<18;i=i+1){
		var brique;
        brique=createSprite(400,80);
        brique.addImage(briqueskin);
        group_brique.add(brique);
		brique.immovable=true;
		briquecompt = briquecompt + 1;
	}
	
    barre_sprite=createSprite(400,595);  //image de la barre
    barre_sprite.addImage(img);
	barre_sprite.immovable=true;
	
	xballe=floor(random(20,780))				//Création de la balle n°1
	balle_sprite=createSprite(xballe,400);
	balle_sprite.addImage(img2);
	balle_sprite.mass=1
		
		if (balle2activate == true) {				//Création de la balle n°2 si elle est activé
			xballe2=floor(random(20,780))
			balle2_sprite=createSprite(xballe2,-100);
			balle2_sprite.addImage(img2);
			balle2_sprite.mass=1;
		}
		
	vie=createSprite(50,300);  //Création de l'image des vies
	vie.addImage(vie3skin);
	vie.immovable=true;
	
    wall_g=createSprite(-5,200,10,800);		//création des murs
    wall_d=createSprite(805,200,10,800);
    wall_h=createSprite(400,-5,800,10);
    wall_b=createSprite(400,605,800,10);
    wall_d.immovable=true;
    wall_g.immovable=true;
    wall_h.immovable=true;
    wall_b.immovable=true;
}

function draw() {		//Fonction dynamique, s'éxécute pendant qu'on joue
	background(bgimg);
	if (start==false){
		textSize(20);																//Start quand on clique
		text("Faite clique droit avec la souris pour commencer",200,300);
	}
	if (briquecompt == 0){
		vienumb = 0;
	}
	
	/*if (balle2activate = true){			//La balle n°2 est un powerup actif pendant un certain temps
		time = millis();
	}
	
	if (time ==  10000) {
		balle2activate = false;			//La balle n°2 se désactive au bout de 10000 miliseconde
		balle2_sprite.remove();
	}*/
	
	if (vienumb > 0 ){							// Tant que le nombre de vie n'est pas à 0
	balle_sprite.bounce(barre_sprite);			// Les balles rebondisses
	balle_sprite.bounce(wall_g);
    balle_sprite.bounce(wall_d);
    balle_sprite.bounce(wall_b,life);
    balle_sprite.bounce(wall_h);
	balle_sprite.bounce(group_brique,contact);	
	
	if (balle2activate == true) {
	balle2_sprite.bounce(barre_sprite);
	balle2_sprite.bounce(wall_g);
    balle2_sprite.bounce(wall_d);
    balle2_sprite.bounce(wall_b,life);
    balle2_sprite.bounce(wall_h);
	balle2_sprite.bounce(group_brique,contact);
	}
	
	drawSprites();
	fill(255)
	textSize(20);
	text("Score : "+score,40,60)					//Affichage du score
	/*text("Powerupactivate est a : "+powerupactivate,40,90)
	text("Powerup est a : "+powerups,40,120)
	text("Vitesse est a : "+vitesse,40,140)
	*/
	if (cheat == 0){				// Tant que le cheat n'est pas actif suivre la souris
		barre_sprite.position.x = constrain(mouseX, barre_sprite.width/2, width-barre_sprite.width/2);
	}
	else if(cheat == 1){			//Cheat on, suis la balle
		barre_sprite.position.x = balle_sprite.position.x
	}
	
	}
	
	else {
		fill(255)
		textSize(30)
		text("Game Over",300,100)
		text("Votre score est de "+score+" points",230,200)
	}
}

function keyPressed(){ // Détecte si la touche c est pressé
	if (keyCode == 67)
		if (cheat == 0){
			cheat = 1;
		}
		else if (cheat == 1){
			cheat = 0
		}
}

function mousePressed(){		//Détecte si la souris est pressé
	if (start==false){
    balle_sprite.setVelocity(vitesse,vitesse);
	balle2_sprite.setVelocity(vitesse,vitesse);
	start=true
	}
}



function contact(sprite_1,sprite_2){
	sprite_2.remove();
	score = score + 10;	
	/*powerupactivate = floor(random(1,4));
	powerups = floor(random(1,4));
	if (powerupactivate==1) {
		if (powerups == 1){
			vitesse = vitesse - 1;
			balle_sprite.setVelocity(vitesse,vitesse);
		}
		if (powerups == 2){
			vitesse = vitesse + 1;
			balle_sprite.setVelocity(vitesse,vitesse);
		}
		if (powerups == 3 && balle2activate == false){	
			balle2activate = true
			balle2_sprite.position.y=200
			balle2_sprite.setVelocity(vitesse,vitesse);
			
		}
	}*/
	
	briquecompt = briquecompt - 1;
}

function life(sprite_1,sprite_2){
	vienumb= vienumb-1;
	if (vienumb==5){
		vie.addImage(vie2skin);
		vienumb= vienumb-1;
		
	}
	if (vienumb==3){
		vie.addImage(vie1skin);
		vienumb= vienumb-1;
	}
	if (vienumb==1){
		vie.remove();
		vienumb= vienumb-1;
	}
}