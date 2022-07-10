var ball;
var floor;
var wall1;
var wall2;

let engine;
let world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor =new Ground(200,390,400,20);
	wall1 = new Ground(width/2,670,width,20);
	wall2 = new Ground(1100,600,20,120)

	var ball_options={

		restitution:0.92
		
	
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world, ball);

	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  ellipse(ball.position.x, ball.position.y,20);

  floor.show();
  wall1.show();
  wall2.show();  
  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0});
		
	}
}



