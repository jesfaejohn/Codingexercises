
// ***** Setup function ***** //
function setup(){
    createCanvas(400,400);
    colorMode(HSB,width);
    }

function pixelsquare(){
     for (var x = 0; x <= width; x=x+10) {
     for (var y = 0; y <= height; y=y+10) {
       var c=color(x,y,width);
       fill(c);
       rect(x,y,10,10);
       }
    }
    console.log('Done loading table...');
}
// ***** Draw function ***** //
function draw(){
   background(255);  
   noStroke();
   pixelsquare();  
}