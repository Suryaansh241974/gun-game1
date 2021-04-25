var bg1;
var gun;
var target;
var bg1Image;
var targetImage;
var gunImage;
var shoot;

function preload(){
  bg1Image = loadImage ("images/scenary.jpg");
  gunImage = loadImage("images/gun.png")
  targetImage = loadImage("images/target.png")
  youWinImage = loadImage("images/youn win.png")
}


function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);

  bg1 = createSprite (500,300,800,400)
  bg1.addImage("bgImage",bg1Image);
  bg1.scale = 4;
 
  target = createSprite (450,250,100,100);
  target.addImage("targetImage",targetImage);
target.scale = 0.3;

 shoot = createSprite (450,550,50,50);
shoot.scale = 0.2;
shoot.shapeColor="red";

   gun = createSprite (450,550,200,350);
   gun.addImage("gunImage",gunImage);
   gun.scale = 0.2;

 
}

function draw() {
  background("black");
  
  gun.x=World.mouseX;
  shoot.x=gun.x;
  if(keyDown("space")){
    shoot.velocityY=-10;
  }
 

 
 if(shoot.x>450){
   shoot.velocityY=0;
 }
 console.log(shoot.x);
 
  drawSprites();
  text(mouseX+","+mouseY,200,20)
}