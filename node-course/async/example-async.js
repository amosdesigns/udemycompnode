/**
 * Created by Jerome on 8/18/16.
 */
var weather = require('./weather.js');

weather(function (currentWeather) {
    console.log(currentWeather);
});
