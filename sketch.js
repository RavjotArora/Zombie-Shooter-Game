var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var life1, life1Img, life2, life2Img,life3, life3Img;
var zombieGroup


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png");

  life1Img = loadImage("assets/heart_1.png");
  life2Img = loadImage("assets/heart_2.png");
  life3Img = loadImage("assets/heart_3.png");

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   //player.debug = true
   player.setCollider("rectangle",0,0,300,300)

life1 = createSprite(1650,75,50,50)
life1.addImage(life1Img)
life1.scale = 0.4
life1.visible = false;

life2 = createSprite(1610,75,50,50)
life2.addImage(life2Img)
life2.scale = 0.4
life2.visible = false;

life3 = createSprite(1570,75,50,50)
life3.addImage(life3Img)
life3.scale = 0.4

zombieGroup = new Group()


}

function draw() {
  background(0); 

createZombie();


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")&& player.y> windowHeight/2){
  player.y = player.y-30

}
if(keyDown("DOWN_ARROW")&& player.y< windowHeight-50){
 player.y = player.y+30
}

if(keyDown("RIGHT_ARROW")&& player.x< windowWidth/2){
  player.x = player.x+10
 }
 
 if(keyDown("LEFT_ARROW")&& player.x> 650){
  player.x = player.x-10
 }


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(zombieGroup.isTouching(player)){
  life3.visible = false
  life2.visible = true;
  
  for(var i = 0; i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy();
    }

  }

}

drawSprites();

}

function createZombie(){

if(frameCount % 120 === 0){
  zombie = createSprite(1650,displayHeight - 300, 50,50)
  zombie.addImage(zombieImg);
  zombie.scale = 0.2
  zombie.velocityX = -3;
  zombie.lifetime = 450;
  zombie.y = random(displayHeight/2,displayHeight - 100)
  zombieGroup.add(zombie)

}


}
