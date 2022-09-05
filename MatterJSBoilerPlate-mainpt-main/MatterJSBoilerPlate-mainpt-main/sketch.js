
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options1 = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var options2 = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var options3 = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,options1)
	World.add(world,block1)

	block2 = Bodies.rectangle(110,50,10,10,options2)
	World.add(world,block2)

	block3 = Bodies.rectangle(350,50,100,10,options3)
	World.add(world,block3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(block1.position.x,block1.position.y,10,10)

  rect(block2.position.x,block2.position.y,10,10)

  rect(block3.position.x,block3.position.y,100,10)
 
}



