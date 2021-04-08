class rope {
    constructor(pointA,bodyB){
        var opt={
        pointA:pointA,
        bodyB:bodyB,
        stiffness:0.3,
        length:360
        }
        this.pointA=pointA
        this.ropes=Constraint.create(opt)
        World.add(world,this.ropes)
    }
    display(){
     var pa=this.pointA
     var pb=this.ropes.bodyB.position
     strokeWeight(5)
     stroke("white")
        line(pa.x,pa.y,pb.x,pb.y-70)
    }
}


