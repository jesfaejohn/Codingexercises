
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
       var a=(mouseX,mouseY);
       var c=map(size,0,500,0,225);
       //var c=color(0,0,s);
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

