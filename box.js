class box {
    constructor(x,y,width,height){
    this.width=width
    this.height=height
    this.boxs=Bodies.rectangle(x,y,width,height,{isStatic:false,restitution:0.2 ,density:2 ,friction:100})
    World.add(world,this.boxs)
    
    }
    display(){
    push()
    translate(this.boxs.position.x,this.boxs.position.y)
    rotate(this.boxs.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
    }

}