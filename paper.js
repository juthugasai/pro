class Paper {

    constructor(x, y,radius) {

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
        this.body = Bodies.circle(x, y,radius, options);
        //this.width = this.width;
        this.radius= radius;
       // this.height = 50;
        //World.add(world, this.body);

        this.image=loadImage("paper.png")

        //paper= Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, this.body);

    }
        display() {
            //var radius = this.body.radius;
            push();
            stroke("purple");
         fill("purple");
         translate(this.body.position.x,this.body.position.y);
            ellipseMode(RADIUS);
            ellipse(0, 0, this.radius, this.radius);
           pop();
            //rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius);
            
            //stroke("purple");
        }
}

