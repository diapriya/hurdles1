const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState =0;
var playerCount;
var distance = 0;
var database;
var player1,player2,player3,player4;
var players=[player1,player2,player3,player4];

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  
 form = new Form();
  player1 = new Game(100,900,20,20);
  player2 = new Game(300,900,20,20);
  player3 = new Game(500,900,20,20);
  player4 = new Game(700,900,20,20);

  hurdle1 = new Hurdle(100,700,20,20);
  hurdle2 = new Hurdle(100,500,20,20);
  hurdle3 = new Hurdle(300,700,20,20);
  hurdle4 = new Hurdle(300,500,20,20);
  hurdle5 = new Hurdle(500,700,20,20);
  hurdle6 = new Hurdle(500,500,20,20);
  hurdle7 = new Hurdle(700,700,20,20);
  hurdle8 = new Hurdle(700,500,20,20);


}

function draw() {
  background(255,255,255);
  form.display();
  player1.display();
  player2.display();
  player3.display();
  player4.display();

  hurdle1.display();
  hurdle2.display();
  hurdle4.display();
  hurdle3.display();
  hurdle5.display();
  hurdle6.display();
  hurdle7.display();
  hurdle8.display();

 
 // player1.play();
  drawSprites();
}


function keyPressed() {
  //alert(1);
  if (keyCode === UP_ARROW) {
    player1.body.position.y = player1.body.position.y - 10;
   
  }else if (keyCode === DOWN_ARROW) { 
    player1.body.position.y = player1.body.position.y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    player1.body.position.x = player1.body.position.x - 5;
    
  } else if (keyCode === RIGHT_ARROW) {
    player1.body.position.x = player1.body.position.x + 5;
  }
  
} 
