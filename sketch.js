var ball;
var groundObj;
var leftObj;
var rightObj;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution: 0.3,
		friction:0,
		density:1.2,
	
	}
	ball = Bodies.circle(120,650,20,ball_options);
	World.add(world, ball);
	Engine.run(engine);
	groundObj = new Ground(width/2,670,width,20)
	leftObj = new Ground(900,600,20,120)
	rightObj = new Ground(1100,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show()
  leftObj.show()
  rightObj.show()
  ellipse (ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:62,y:0})
	}
}

