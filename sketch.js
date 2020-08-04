
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,paper;
var bar1,bar2,bar3;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,670,1600,20)

	/*
	paper= Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});
	World.add(world, paper);
	*/

	bar1=new Dustbin(1150,650,20,200)
    //bar1.shapeColor=color("red");

	bar2=new Dustbin (1200,650,200,20)
    //bar2.shapeColor=color("red");

    bar3=new Dustbin (1250,650,20,200)
    //bar3.shapeColor=color("red");

	paper = new Paper(100,450,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  
 ground.display();
 paper.display();
 bar1.display();
 bar2.display();
 bar3.display();
 


}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-90})	
}
}


