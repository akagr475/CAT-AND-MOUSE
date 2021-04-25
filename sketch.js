var cat1,cat1Image;
var cat2,cat2Image;
var cat3,cat3Image;
var cat4,cat4Image;
var cat;

var garden,gardenImage;

var mouse;
var mouse1,mouse1Image;
var mouse2,mouse2Image;
var mouse3,mouse3Image;
var mouse4,mouse4Image;

function preload() {
    //load the images here
 cat1Image=loadAnimation("images/cat1.png");
 cat2Image=loadAnimation("images/cat2.png");   
 cat3Image=loadAnimation("images/cat3.png");
 cat4Image=loadAnimation("images/cat4.png");

gardenImage=loadImage("images/garden.png");

mouse1Image=loadAnimation("images/mouse1.png");
mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3Image=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,700,10,10);
cat.addAnimation("catSleeping",cat1Image);
cat.scale=0.2;

mouse=createSprite(650,700,10,10);
mouse.addAnimation("mouseStanding",mouse1Image);
mouse.scale=0.15;

}

function draw() {

background(gardenImage);

//Write condition here to evalute if tom and jerry collide
if(mouse.x-cat.x < (mouse.width-cat.width)/2){
cat.velocityX=0;
cat.addAnimation("happyCat",cat4Image);
cat.x=500;
cat.scale=0.2;
cat.changeAnimation("happyCat");
    
mouse.addAnimation("happyMouse",mouse3Image);
mouse.scale=0.15;
mouse.changeAnimation("happyMouse");
    
}

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouse2Image);
mouse.frameDelay=25;
mouse.changeAnimation("mouseTeasing");

cat.velocityX=5;
cat.addAnimation("catStanding",cat2Image);
cat.changeAnimation("catStanding");
}

}