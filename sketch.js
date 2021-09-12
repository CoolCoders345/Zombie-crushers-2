const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var bridge
var ground, wallR, wallL
var link,button
var backIMg, background, zombie, zomIMG
var stones  = []
function preload(){
  backIMg = loadImage("assets/background.png")
zomIMG = loadImage("assets/zombie.png")


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  background.addImage(backIMg)
zombie.addImage(zomIMG)
zombie.velocityX = 10
button.createButton("")
button.position(width-200,height/2-50)
button.class("breakbutton")
button.mousePressed(handleButtonPress)
bridge =new Bridge(30,{x:150,y:windowHeight/2})
ground = new Base(windowWidth/2, windowHeight-10,windowWidth,10)
wallR = new Base(10,windowHeight/2,300,100)
wallL = new Base(2000,windowHeight/2,300,100)
link = new Link(bridge, wallL)
drawSprites()
}

function draw() {
  background(51);
  Engine.update(engine);
  bridge.show()
  ground.show()
  wallR.show()
  wallL.show()
  for (var i = 0; i<=8;i++){
    var x =  random (width/2-200,width/2+300);
    var y = random (-10,140);
    var stone = new Stone(x, y, 80,80)
    stones.push(stone)
  }
}
function handleButtonPress(){
  jointLink.detach()
  setTimeout(()=>{
    bridge.break()
  },1500)
  
}