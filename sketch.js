var seaImg, sea, shipImg1, ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;


  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship",shipImg1);
  ship.scale=0.25;

 
}

function draw() {
  background("blue");
 if (sea.x <0) {
  sea.x = sea.width/2;
 }
 drawSprites();
}
