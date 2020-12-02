const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var drops = []
var maxDrops = 100;
var man_running,thunderBolt1,thunderBolt2,thunderBolt3,thunderBolt4,thunderBoltsGroup;
function preload(){

    man_running = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
   
    thunderBolt1 = loadImage("1.png");
    thunderBolt2= loadImage("2.png");
    thunderBolt3= loadImage("3.png");
    thunderBolt4= loadImage("4.png");
}

function setup(){
   createCanvas(300,520)
  
   man = createSprite(150,380,10,30);
   man.addAnimation("running",man_running)
   man.scale = 0.4;

   thunderBoltsGroup = new Group();

   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);

   for(var i=0; i<maxDrops; i++){
     drops.push(new Drops(random(0,400), random(0,400)))

    
   }
   
   circle =new Umbrella();
}

function draw(){
    background("black");
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY); 
    spawnthunderBolts();

    for( var i =0; i<drops.length;i++){
      drops[i].display();
      drops[i].update();
    }






    drawSprites();

}   

function spawnthunderBolts() {
  if(frameCount % 80 === 0) {
    var thunderBolt = createSprite(132,16,10,40);
    //obstacle.debug = true;
    
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunderBolt.addImage(thunderBolt1);
              break;
      case 2: thunderBolt.addImage(thunderBolt2);
              break;
      case 3: thunderBolt.addImage(thunderBolt3);
              break;
      case 4: thunderBolt.addImage(thunderBolt4);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    thunderBolt.scale = 0.5;
    thunderBolt.lifetime = 28;
    //add each obstacle to the group
    thunderBoltsGroup.add(thunderBolt)
  }
}