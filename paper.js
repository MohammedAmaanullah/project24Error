class Paper{
    constructor(x,y,width,height){
        var options = {
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        }
        this.paper = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("paperimage.png");
        this.width = width;
        this.height = height;

        World.add(world, this.paper);
    }
    display(){
        var position = this.paper.position;
        push();
        translate(position.x, position.y);
        imageMode(CENTER);
        image(image,0,0,this.width,this.height);
        pop();
    }
}