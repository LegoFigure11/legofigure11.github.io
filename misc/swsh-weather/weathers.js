const WEATHERS = ["Normal Weather", "Overcast", "Raining", "Thunderstorm", "Snowing", "Snowstorm", "Intense Sun", "Sandstorm", "Heavy Fog"];

function getWeatherName(val) { 
    return WEATHERS[val];
}

function getWeatherVal(name) { 
    for (var i = 0; i < WEATHERS.length; i++) { 
        if (WEATHERS[i] === name) return i;
    }
}