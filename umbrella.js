class Umbrella {
    constructor() {
      var options = {
isStatic:true
      }
      this.r =70;
      this.body = Bodies.circle(160,325,70,options);
//this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }