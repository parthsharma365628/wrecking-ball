class ball {
    constructor(x,y,width){
    this.width=width
    this.balls=Bodies.circle(x,y,width,{isStatic:false,restitution:0.8 ,density:19 ,friction:2})
    World.add(world,this.balls)
    
    }
    display(){
    push()
    translate(this.balls.position.x,this.balls.position.y)
    rotate(this.balls.angle)
    fill("green")
    ellipseMode(RADIUS)
    ellipse(0,0,this.width,this.width)
    pop()
    }

}