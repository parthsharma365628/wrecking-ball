const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(900,750);
    engine = Engine.create();
    world = engine.world;

    ground1= new ground(width/2,height-5,width,10)
    ground2 = new ground(450,height-70,210,10)
    ball1= new ball (250,200,70)
    r1 =new rope ({x:250,y:200},ball1.balls)
    c1= new ground (100,200,320,25)
    //w1= new wall (0,375,5,height)
    w2= new wall (width-5,375,5,height)

    b1=new box(380,700,70,70)
    b2=new box(450,700,70,70)
    b3=new box(520,700,70,70)
    b4=new box(415,570,70,70)
    b5=new box(485,570,70,70)
    b6=new box(450,500,70,70)
    t1=new box(450,400,20,98)
    t2=new box(450,300,20,98)
    l1=new box(450,200,100,20)
   // s1=new box(450,100,30,30)


}

function draw(){
    background(0);
    Engine.update(engine);
   
   
    ground1.display()
    ball1.display()
    r1.display()
   
    fill("yellow")
    c1.display()
   
    fill("green")
    ground1.display()
    ground2.display()
   
    fill("red")
    t1.display()
    b1.display()
    b2.display()
    b3.display()
   
    fill("blue")
    t2.display()
    b4.display()
    b5.display()
   
    fill("purple")
    b6.display()
    l1.display()

    //fill("gold")
    //s1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.balls,{x:mouseX,y:mouseY})
}

