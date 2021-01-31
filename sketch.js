var movingRect, fixedRect;

function setup()
{
  createCanvas(1200, 800);
  fixedRect = createSprite(200, 200, 40, 65);
  movingRect = createSprite(400, 200, 80, 30);

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";


}

function draw()
{
  background(0);

  console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <  fixedRect.width/2 + movingRect/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2  && movingRect.y - fixedRect.y < movingRect.height+fixedRect.height)
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";

  }
  else
  {
    movingRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }



  drawSprites();
}