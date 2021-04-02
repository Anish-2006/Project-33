const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;
var snowArr = [];

function preload(){

  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  for(var i = 0;i < 100; i++){
    
    snowCount = new Snow(random(0,800),random(0,400));
    snowArr.push(snowCount);
      
    }

  //createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  

  for(var i = 0;i<100;i++){
    snowArr[i].display(); 
    snowArr[i].update_pos();

   }


  drawSprites();
}