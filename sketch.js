
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1sprite, box2sprite, box3sprite, box1body, box2body, box3body;
var groundSprite, ground;
var paper1;

function preload()
{
    
}

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    var o_options ={
      isStatic : true
      }

    
    engine = Engine.create();
    world = engine.world;

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("yellow")

    ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    paper1 = new Paper(300,100);

    box1=new Dustbin(1400, 650, 200,20,o_options);

    box2=new Dustbin(1300, 610, 20,100,o_options);

    box3=new Dustbin(1500, 610, 20,100,o_options);
   
    Engine.run(engine); 
}


function draw() {
  
  background("pink");
 

  paper1.display();
  box1.display();
  //box2.display();
  //box3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:470,y:-470});
  }
}