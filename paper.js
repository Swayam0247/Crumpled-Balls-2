class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:0.5
      }
      this.body = Bodies.circle(x,y,70,options);
      this.width = width;
      
      World.add(world, this.body);

      this.image = loadImage("paper.png")
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(RADIUS);
      image(this.image,0,0,70,70);
      fill("pink");
      pop();
    }
  }