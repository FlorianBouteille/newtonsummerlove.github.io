let Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine; 
let world;
let boxes = [];
let bubbles = [];
let carres = [];
let ground;
let carretest;
let backColor;
let groundColor;
// let toggleButton;

let W = window.innerWidth;
let H = window.innerHeight;
let bubblesOn = true;
let boxesOn = false;

let sliderFriction;
let sliderRestitution;
let sliderSize;
let sliderBackColor;
let sliderGroundColor;

function setup()
{
    engine = Engine.create();
    myWorld = engine.world;
    createCanvas(W, H);
    Engine.run(engine);
    rectMode(CENTER);
    sliderFriction = createSlider(0, 1, 1, 0.01);
    sliderFriction.position(10, H - 40);
    sliderRestitution = createSlider(0, 1, 0, 0.01);
    sliderRestitution.position(10, H - 70);
    sliderSize = createSlider(0, 100, 20, 0.5);
    sliderSize.position(210, H - 40 );
    sliderBackColor = createSlider(0, 255, 0, 1);
    sliderBackColor.position(W - 210 , H - 40);
    sliderGroundColor = createSlider(0, 255, 255, 1);
    sliderGroundColor.position(W - 210, H - 70);
    // toggleButton = createButton("(^.^)");
    // toggleButton.position(W/2, H - 50);
    // toggleButton.mousePressed(changeForm);
    ground = Bodies.rectangle(W/2, H - 100, W-10, 10, {isStatic : true});
    World.add(myWorld, ground);
    for (i = 0; i < 10; i++)
    {
        carres.push(Bodies.rectangle((W/10)*i + W/20, random(300 , H - 200), 100, 100, {isStatic : true}));
        World.add(myWorld, carres[i]);
    }
    strokeWeight(0);
    noStroke();
}

function mouseDragged()
{
    let friction = sliderFriction.value();
    let restitution = sliderRestitution.value();
    let size = sliderSize.value();
    if (mouseY < H - 100)
    {
        if (bubblesOn)
        {
        bubbles.push(new makeBubble(mouseX, mouseY, size + random(5), friction, restitution));
        }
        if (boxesOn)
        {
        boxes.push(new makeBox(mouseX, mouseY, size, size, friction, restitution));
        }
    }
}

function keyPressed()
{
    if (keyCode == "c")
    {
        bubbles = [];
    }
}

function draw()
{
    backColor = sliderBackColor.value();
    groundColor = sliderGroundColor.value();
    background(backColor);
    fill(groundColor);
    rect(ground.position.x, ground.position.y, W-10, 10);
    for (i in carres)
    {
        rect(carres[i].position.x, carres[i].position.y, 100, 100);
    }
    for (j in bubbles)
    {
        fill(j%150, 10 + j%245, 10 + j%50);
        bubbles[j].show();
    }
    for (i in boxes)
    {
        fill(255);
        boxes[i].show();
    }
}

function changeForm()
{
    if (!bubblesOn)
    {
        bubblesOn = true;
    }
    else
    {
        bubblesOn = false;
    }
    console.log(bubbles, boxes);
    boxesOn = !bubblesOn;
}