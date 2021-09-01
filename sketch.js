var alien1, alien1Img;

var alien1Group;
var rocket, rocket_flying;
var stars, starsImg, starsGroup ;


var space, spaceImg;

var gameState = "play"




function preload(){
    spaceImg = loadImage("space.png")
    rocketImg = loadImage("rocket.png")
    alien1Img = loadImage("alien1.png")
    starsImg = loadImage("stars.png")
    


}

function setup() {
    createCanvas(600, 600);
    space = createSprite(300, 200);
    space.velocityY = 2;
    space.addImage("space" , spaceImg);

    alien1Group = new Group();
    starsGroup = new Group();

    rocket = createSprite(200, 200, 50, 50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg);
    


 
}

function draw() {
    background(0);

    edges= createEdgeSprites();
    rocket.collide(edges);

  if(gameState === "play"){

   if(keyDown("RIGHT_ARROW")){
       rocket.x = rocket.x+5
   }
   if(keyDown("LEFT_ARROW")){
       rocket.x = rocket.x-5
   }


   if(keyDown("SPACE")){
     rocket.velocityY = -10
   }
 rocket.velocityY = rocket.velocityY + 0.8

 if(space.y>400){
     space.y = 300
 }
 spawnalien1();
 spawnstars();
 if(starsGroup.isTouching(rocket)){
    
     starsGroup.destroyEach();
 }
 if(alien1Group.isTouching(rocket)){
     rocket.destroy();
     gameState = "end"
 }
 
 
  
drawSprites();
}
if(gameState === "end"){
    stroke("white");
    fill("white")
    text("GAME OVER" , 250, 250)
}
 }
  
function spawnalien1(){
if (frameCount % 800 === 0 ){
    var alien1= createSprite(100, -20)
    alien1.x = Math.round(random(100, 800));
    alien1.addImage(alien1Img);
    alien1.scale = 0.3;
    alien1.velocityY = 2;
    alien1Group.add(alien1)
    alien1.lifetime = 300;
}
}

function spawnstars(){
    if(frameCount % 500 === 0){
        var stars = createSprite(200, -20)
        stars.x = Math.round(random(120,400))
        stars.addImage(starsImg);
        stars.scale = 0.05;
        stars.velocityY = 2;
        starsGroup.add(stars)
        stars.lifetime = 300 ;
    }
}