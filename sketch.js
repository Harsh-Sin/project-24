const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1, iron2, rubber1;


function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, 600, 1200, 20)
    hammer = new Hammer(10, 100);

    stone1 = new stone(300, 570, 50, 30);
    iron2 = new iron(600, 550, 50, 50);

    rubber1 = new rubber(900, 580, 70);





}

function draw() {
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone1.display();

    iron2.display();

    rubber1.display();

}