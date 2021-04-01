
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plate,plateImg;
var bun;
var foodGroup;

function preload()
{
	plateImg=loadImage("images/plate.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plate=createSprite(windowWidth/2,windowHeight-100,60,30);
plate.addImage(plateImg);
plate.scale=0.4;


foodGroup=new Group()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");

  plate.x=mouseX;

  spawnFood();

  foodGroup.collide(plate);

  if(foodGroup.isTouching(plate)){
	  foodGroup.velocityX=plate.x;
  }
  
  drawSprites();
 
}



function spawnFood() {

	if(frameCount%60===0){
	var food=createSprite(random(50,windowWidth-50),0,50,50);
	food.velocityY=5;
	foodGroup.add(food);
	}

}



