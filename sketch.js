var fixedRect,movingRect,wallu,walld;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 50, 30, 30);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = false;
  movingRect = createSprite(200, 350,30,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = false;
wallu = createSprite(200,-10,400,10);
walld = createSprite(200,410,400,10);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  createEdgeSprites;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "pink";  
    movingRect.shapeColor = "blue";
  }

if (movingRect.y - wallu.y < wallu.height/2 + movingRect.height/2
  && wallu.y - movingRect.y < wallu.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  }
  if (movingRect.y - walld.y < walld.height/2 + movingRect.height/2
    && walld.y - movingRect.y < walld.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    }
  if (fixedRect.y - walld.y < walld.height/2 + fixedRect.height/2
    && walld.y - fixedRect.y < walld.height/2 + fixedRect.height/2){
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
    if (fixedRect.y - wallu.y < wallu.height/2 + fixedRect.height/2
      && wallu.y - fixedRect.y < wallu.height/2 + fixedRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
  
  drawSprites();
}