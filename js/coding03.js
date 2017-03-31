// **** Global variables ****//
var apiKey = '51771b8b2f361ac7a07febf73754109d';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
var city;
var units = 'metric';
var weatherData;
var forecastData;
// Temperature //
var temperature = 0;
// Maximum Temp over the day//
var maxtemp = 0;
// Minimum Temp over the day//
var mintemp = 0;
// Humidity //
var humidity = 0;
//windspeed//
var windspeed=0;
var description;
var fdescription;
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
    createCanvas(800, 600);
    button = select('#submit');
    city = select('#city');
    button.mousePressed(queryAPI);
    button.mousePressed(querytoday);
    button.mousePressed(queryDate);
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

function getForecastData(apitodayData){
    forecastData=apitodayData;
    mintemp = forecastData.list[0].temp.min;
    maxtemp = forecastData.list[0].temp.max;
    console.log(getForecastData);
}

// **** Draw function **** //
function draw(){
    background(255);
    noStroke();
    textSize(50);
    //textStyle(BOLD);
    //text(city.name,250,100);
    
    if(weatherData){
        if (temperature >0 && temperature<=10){
        background(255,255,0);
        textSize(75);
        text(int(temperature) + ' \xB0C', 300, 200);
        }
        else{
        if (temperature >10 && temperature<=30){    
        background(255,165,0);
        textSize(75);
        text(int(temperature) + ' \xB0C', 300, 200);
        }  
        else
        {
        background(255,0,0);
        textSize(75);
        text(int(temperature) + ' \xB0C', 300, 200);
        }
        }
       
        // humidity //
        textSize(30);
        textStyle(NORMAL);
        // ellipse(400, 400, humidity * 10, humidity * 10);
        text(humidity + '%' + 'humidity',100, 400);

        // description //
        textStyle(BOLD);
        text(description,300,275);

        //wind speed//
        textStyle(NORMAL);
        text(int(windspeed) +'mph wind',500,400);
    }

    if(date){
        text(monthNames[m-1] + ' ' + d + ', ' + y, 275, 325);
    }
    if (getForecastData) { 

       textSize(25);
       textStyle(BOLD);
       text('Todays Forecast',300,500);
       textStyle(NORMAL);
       text('Min temperature: ' + int(mintemp) + '\xB0C', 25, 550);
       text('Max temperature: ' + int(maxtemp) + '\xB0C', 500, 550);
    }

}

   

