const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Sand1,Sand2,Sand3,Sand4;

function setup() {
	createCanvas(1000, 600);

	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

 ellipse(850,350,55,55);

 Hammer.display();
 Iron.display();
 Plane.display();
 Stone.display();
 Rubber.display();


  drawSprites();
 
}



