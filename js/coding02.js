
var max_distance;

// ***** Setup function ***** //
function setup(){
    createCanvas(500,500);
    max_distance=dist(0,0,width*2,height*2);
    }

function pixelcircle(){
   background(255); 
     for (var x = 0; x <= width; x=x+20) {
     for (var y = 0; y <= height; y=y+20) {

       var size=dist(mouseX,mouseY,x,y);
       var s=size/max_distance*50;
       //var color=map(y,0,width,0,255);
       colorMode(HSB,500);
       var c=color(0,0,100)
       fill(c);
       ellipse(x,y,s,s);
       }
   } 
}
// ***** Draw function ***** //
function draw(){
   strokeWeight(0.5);
   pixelcircle(); 
}

