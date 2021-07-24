var backgroundimg;
var boyimg,boy;
var boximg;

function preload(){
boyimg = loadAnimation("images/Runner-1.png","images/Runner-2.png");
backgroundimg = loadImage("images/Road.png");
boximg = loadImage("images/box.png");

}

function setup() {
  createCanvas(1200,700);
  bg = createSprite(600,250)
  bg.addImage(backgroundimg)
  bg.scale = 1
  bg.velocityY = 2

  boy = createSprite(600,600)
  boy.addAnimation("boy",boyimg)
  boy.scale = 0.1

  edges = createEdgeSprites()

}

function draw() {
  background(0);
  if(bg.y>700)  {
    bg.y = 250
  }
  if(keyDown("left")){
    boy.x = boy.x -5
  }
  if(keyDown("right")){
    boy.x = boy.x +5
  }
  if(keyDown("space")){
    boy.velocityY = -10
  }
  boy.velocityY = boy.velocityY+0.8
  boy.collide(edges[3])

  spawnbox()
  drawSprites();
}
function spawnbox(){
  if(frameCount%150 === 0){
    box = createSprite(random(100,1100),-10)
    box.addImage(boximg)
    box.scale = 0.4
    box.velocityY = 2
  }
}