var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
 
  weight=random(30,52)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour="gray";
  
  
}

function draw() {
  background(80,80,80);  
  Damage= 0.5*bulletWeight*bulletSpeed*bulletSpeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall)
drawSprites();
}