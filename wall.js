class wall {
    constructor(x,y,width,height){
    this.width=width
    this.height=height
    this.walls=Bodies.rectangle(x,y,width,height,{isStatic:true,restitution:1})
    World.add(world,this.walls)
    
    }
    display(){
    rectMode(CENTER)
    rect(this.walls.position.x,this.walls.position.y,this.width,this.height)

    }

}