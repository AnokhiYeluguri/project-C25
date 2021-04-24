
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper,paper1
var world; 
var bg

function preload(){

	bg = loadImage("background1.jpg")
}


function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,770,width,20);
	dustbinObj=new dustbin(1200,750);
	paper = new Paper(150,70, 70)
//	paper1 = new Paper(150,70, 70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 


  groundObject.display();
  paper.display()
  //paper1.display()
  dustbinObj.display();


  keyPressed()
  

}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:2.5,y:-7})
	}

	
	/*if (keyCode === SPACE){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2.5,y:-7})
	}*/
}
