var starImg, fairyImg, bgImg;
var fairy ,fairyBody, fairyVoice;
var star, starBody;
var STAND,FELL;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	fairyBody = Bodies.circle(130 , 520 , 5);
	World.add(world, fairyBody);

	Engine.run(engine);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	star.collide(fairy);
	
  background(bgImg);
  keyPressed();

  star.collide(fairy);

  drawSprites();

  fairy.setCollider("rectangle",450,20,200,10);

}

function keyPressed() {
	
    if(keyDown("down")){
		star.velocityY = 7;
	  
	}

	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	  
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	  
	}
}



