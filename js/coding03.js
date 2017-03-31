// **** Global variables ****//
var apiKey = '51771b8b2f361ac7a07febf73754109d';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var city;
var units = 'metric';
var weatherData;
var forecastData;
// Temperature //
var temperature = 0;
// High Temp //
var maxtemp = 0;
// Low Temp //
var mintemp = 0;

// Humidity //
var humidity = 0;

var description;
var fdescription;
var windspeed=0;

var button;
var queryText;
var cnv;
var secondTitle;
var date;
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
// **** Preload function ****//


// **** Setup function **** //
function setup(){
    var cnv = createCanvas(800, 1000);
    cnv.parent('canvas-holder');
    button = select('#submit');
    city = select('#city');
    button.mousePressed(queryAPI);
    button.mousePressed(querytoday);
    button.mousePressed(forecastTitle);
    button.mousePressed(queryDate);
    //queryText.position(500, 800);
    city.position(1000, 200);
    button.position(city.x + city.width, 800);
    city.style('font-family', 'Roboto Condensed');
}

function keyPressed() {
    if(keyCode == ENTER) {
        queryAPI();
        querytoday();
        getForecastData();
        queryDate();
    } else if (keyCode == RETURN) {
        queryAPI();
        querytoday();
        getForecastData();
        queryDate();
    }
}

function forecastTitle(title){
    secondTitle = title;
}

function queryDate(calendar){
    date = calendar;
    m = month();
    d = day();
    y = year();
}

function queryAPI(){
    var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;  
    loadJSON(query, getWeatherData);
}
function getWeatherData(apiData){
    weatherData = apiData;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    highTemp = weatherData.main.temp_max;
    lowTemp = weatherData.main.temp_min;
    windspeed=weatherData.wind.speed;
    description = weatherData.weather[0].description;
    console.log(weatherData);
}

function querytoday(){
    var todayforecast = forecastURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(todayforecast, getForecastData);
}

function getForecastData(apiData){
    weatherData = apiData;
    mintemp = forecastData.list.temp.min;
    maxtemp = forecastData.list.temp.max;
    fdescription = forecastData.list.weather.description;
    console.log(getForecastData);
}



// **** Draw function **** //
function draw(){
    background(60);
    fill(0);
    noStroke();
    colorMode(HSB, 100);
    textSize(50);
    //textStyle(BOLD);
    text(city.value(),275,100);
    fill(255);
    //queryText = text('Pick City', 400, 800)
    if(weatherData){
        // temperature //
        if (temperature >=0){    
        fill(temperature, 50, 100);
        textSize(75);
        text(int(temperature) + ' degC', width/2, 200);
        }

        else {
        fill(temperature, 100, 100);
        textSize(50);
        textStyle(BOLD);
        text(int(temperature) + ' DEGREES!', 20, 200);
        //text('\n' + m + '.' + d + ' ' + y, 500, 250);
        }
        // humidity //
        textSize(30);
        textStyle(NORMAL);
        // ellipse(400, 400, humidity * 10, humidity * 10);
        text(humidity + '%' + '  humidity',150, 350);

        // description //
        textStyle(BOLD);
        text(description,300,275);

        //wind speed//
        textStyle(NORMAL);
        text(int(windspeed) +'mph wind',500,350);
    }

    if(date){
        text('\n' + monthNames[m] + ' ' + d + ', ' + y, 500, 290);
    }

    if (getForecastData) {
     textStyle(NORMAL);
        text('Forecast for today:',fdescription,3250,500);
    }

   

}