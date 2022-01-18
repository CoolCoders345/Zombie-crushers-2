const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruit
var connector
function setup() 
{
  createCanvas(600,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,590,600,20);
  rope = new Rope(6, {x:300,y:50})
  fruit = Matter.Bodies.circle(300,300,20)
  Matter.Composite.add(rope.body, fruit)
connector = new Link(rope, fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
ellipse(fruit.position.x, fruit.position.y, 20)
  Engine.update(engine);
  

 
   
}
