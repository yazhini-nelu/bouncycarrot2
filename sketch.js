//create yor variables here
var rabbit,rabbitimg;
var carrot,carrotimg;
var edge1,edge2,edge3,edge4;
function preload(){
//load images here

}

function setup(){
//create sprites 


rabbit=createSprite(420,750,50,50)

carrot=createSprite(650,40,20,20)
carrot.velocityY=5
carrot.velocityX=5

edge1=createSprite(10,10,20,1600)
edge2=createSprite(10,790,1600,20)
edge3=createSprite(790,10,20,1600)
edge4=createSprite(10,10,1600,20)

}

function draw(){
  createCanvas(800,800)
  background("green")
  textSize(40)

 
  rabbit.shapecolor="black"

carrot.bounceOff(edge1)
carrot.bounceOff(edge2)
carrot.bounceOff(edge3)
carrot.bounceOff(edge4)

rabbit.bounceOff(edge1)
rabbit.bounceOff(edge2)
rabbit.bounceOff(edge3)
rabbit .bounceOff(edge4)

  if(keyCode===39){
    rabbit.velocityX=5
  }

  if(keyCode===37){
    rabbit.velocityX=-5
  }
  if(keyCode===38){
    rabbit.velocityY=-5
  }
  if(keyCode===40){
    rabbit.velocityY=5
  }
  if(rabbit.isTouching(carrot)){
    rabbit.velocity=0
    text("Game Over:",400,400)
  }

  drawSprites();
}