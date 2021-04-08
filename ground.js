class ground {
    constructor(x,y,width,height){
    this.width=width
    this.height=height
    this.grounds=Bodies.rectangle(x,y,width,height,{isStatic:true})
    World.add(world,this.grounds)
    
    }
    display(){
    rectMode(CENTER)
    rect(this.grounds.position.x,this.grounds.position.y,this.width,this.height)

    }

}