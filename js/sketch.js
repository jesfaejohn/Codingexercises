

// ***** Global variables ***** //
var apikey='51771b8b2f361ac7a07febf73754109d';
var cityURL='http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var weatherdata;
var units = 'metric';
var temp;
var humidity;
var button;

// ***** Preload function ***** //
function preload(){
  
  
  console.log('JSON TABLE LOADED...');
  
}

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    button=select('#submit');
    city=select('#city'); 
    button.mousePressed(queryAPI);
}
function getweatherdata(apidata){
weatherdata=apidata;
temp=weatherdata.main.temp;
humidity=weatherdata.main.humidity;
print (weatherdata);
}

function queryAPI(){
    var query=cityURL+city.value()+ '&apikey='+apikey+'&units='+units;
    loadJSON(query,getweatherdata);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    fill(0);
    noStroke();
    if(weatherdata);
    {ellipse(200,200,temp*10,temp*10);}
}


