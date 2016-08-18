/**
 * Created by Jerome on 8/18/16.
 */
var request = require('request'),
    encodedLocation = "newyork",
    appid = "cdf2110712e9b9aa01f355690923d65d",
    url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdf2110712e9b9aa01f355690923d65d&q=' + encodedLocation + '&units=imperial';
/**
 * function weather
 * @param callback
 * @return string
 */
module.exports = function (callback) {
    request({
            url: url,
            json: true
        },
        function (error, response, body) {
            if (error) {
                callback ('Error: Usable to fetch weather.');
            } else {
                var cityName = body.name,
                    cityTemp = body.main.temp;
                    callback ( "It's " + cityTemp + ' in ' + cityName + "!" );
            }
        });
};
