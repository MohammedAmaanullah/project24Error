class Dustbin{
    constructor(x,w,width,height){
        var options = {
            isStatic:true
        }
        this.dustbin = Bodies.rectangle(x,y,width,height,options);
        this.width = wdith;
        this.height = height;

        World.add(world, this.dustbin);
    }
    display(){
        var position = this.dustbin.position;
        push()
        translate(position.z, position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}