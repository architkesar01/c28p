
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, stone, m1, m2, m3, m4, m5, m6, m7, m8, m9, ground, tree
var shot
function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	boy =createSprite(350,660,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.15;
	tree = createSprite(1200,420,600,600);
	tree.addImage(treeImage);
	tree.scale = 0.5;

	ground = new Ground(750,760,width,20);
	stone = new Stone(280,575,60);
	sh = new Shot(stone.body, {x:280 , y:575});
	m1 = new Mango(1300,300,60);
	m2 = new Mango(1180,230,60);
	m3 = new Mango(1340,180,60);
	m4 = new Mango(1380,390,60);
	m5 = new Mango(1000,320,60);
	m6 = new Mango(1190,340,60);
	m7 = new Mango(1250,170,60);
	m8 = new Mango(1420,310,60);
	m9 = new Mango(1080,340,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(219,219,219);
  textSize(40);
 
  drawSprites();
  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  sh.display();
  stone.display();

  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    sh.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
		hold.attach(stone.body);
	}
}

