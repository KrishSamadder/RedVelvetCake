var cake;

function preload(){

  cakeImg = loadImage("assets/Cake.png");
}

function setup() {

  createCanvas(1200,600);

  cake = createSprite(600, 300, 20, 20);
  cake.addImage(cakeImg);

}

//creating the function draw
function draw() {
 
  background(0);  

  drawSprites();
}
