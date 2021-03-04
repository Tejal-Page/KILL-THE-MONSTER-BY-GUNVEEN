const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var hero;
var bg;
var monster;
var rope;
var b1, b2, b3, b4, b5, b6, b7, b8;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  // create sprites here

  ground = new Ground(width/2, height/2+200, width, 20);
  hero = new Hero(300,350,100)
  monster= new Monster(850,300,200)
  rope= new Rope(hero.body, {x: 300,y:100})

  b1 = new Box(500, 550, 50, 50);
  b2 = new Box(500, 500, 50, 50);
  b3 = new Box(500, 450, 50, 50);
  b4 = new Box(500, 400, 50, 50);

  b5 = new Box(600, 550, 50, 50);
  b6 = new Box(600, 500, 50, 50);
  b7 = new Box(600, 450, 50, 50);
  b8 = new Box(600, 400, 50, 50);

}

function draw() {
  background(bg);
  Engine.update(engine);

ground.display();
hero.display();
monster.display();
rope.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

