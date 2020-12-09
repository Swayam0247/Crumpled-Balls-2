class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.w=w
		this.h=h
        this.image=loadImage("bin.png") 
        World.add(world, this.body);
        
	}
	display()
	{
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//strokeWeight(4);
            fill("black")
            imageMode(CENTER);
            image(this.image,0,-80,this.w,200);

            //rectMode(CENTER);
            //rect(0,0,this.w,this.h);
			pop()
			
	}
}