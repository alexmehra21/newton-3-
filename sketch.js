const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var canvas;
var world, engine;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup(){
    canvas = createCanvas(800, 800);
  
    engine = Engine.create();
   world = engine.world;

   let canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let options ={
       mouse:canvasmouse
   };
   mConstraint = MouseConstraint.create(engine, options);
   World.add(world, mConstraint);

   pendulum1 = new Pendulum(340, 450, "red");
   pendulum2 = new Pendulum(400, 450, "blue");
   pendulum3 = new Pendulum(460, 450, "green");
   pendulum4 = new Pendulum(520, 450, "yellow"); 
   pendulum5 = new Pendulum(580, 450, "pink");
   sling1 = new Sling(pendulum1.body, { x: 340, y: 200 } , "pink"); 
   sling2 = new Sling(pendulum2.body, { x: 400, y: 200 } , "yellow"); 
   sling3 = new Sling(pendulum3.body, { x: 460, y: 200 } , "green"); 
   sling4 = new Sling(pendulum4.body, { x: 520, y: 200 } , "blue"); 
   sling5 = new Sling(pendulum5.body, { x: 580, y: 200 } , "red");
}
function draw(){
     background(58);
     Engine.update(engine);
     pendulum1.display();
     pendulum2.display();
     pendulum3.display();
     pendulum4.display();
     pendulum5.display();
     sling1.display();
     sling2.display();
     sling3.display();
     sling4.display();
     sling5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY});
}
