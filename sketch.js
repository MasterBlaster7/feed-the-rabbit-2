var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple2
var orange , orange2
var red , red2
function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple2=loadImage("apple.png")
  orange2=loadImage("orangeLeaf.png")
  red2=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(500,500);
  applesGroup=new Group()
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background("white");
  rabbit.x=mouseX
  edges= createEdgeSprites();
  spwanApples()
  spwanorange()
  spwanred()
  rabbit.collide(edges)

 
  
  drawSprites();
}

function spwanApples(){
  if (frameCount % 80  ===0) {
    
    apple=createSprite(50,21,20,20)
    
  apple.addImage(apple2)
  apple.scale=0.1
  
  apple.velocityY=4
  
  apple.x=Math.round(random(20,300))
   
  
 } 

  
  
}
function spwanorange(){
  if (frameCount % 70  ===0) {
    
    orange=createSprite(70,31,20,20)
    
  orange.addImage(orange2)
  orange.scale=0.1
  
  orange.velocityY=4
  
  orange.x=Math.round(random(20,300))
 
  
 } 

  
  
}

function spwanred(){
  if (frameCount % 60  ===0) {
    
   red=createSprite(90,41,20,20)
    
  red.addImage(red2)
  red.scale=0.1
  
  red.velocityY=4
  
  red.x=Math.round(random(20,300))
 
  
 } 

  
  
}





