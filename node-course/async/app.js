/**
 * Created by Jerome on 8/18/16.
 */
var weather = require('./weather.js'),
    location = require('./location.js');

///////////////////////////////////////////////////////
// setup yargs to have a  --location or  -l arguments
///////////////////////////////////////////////////////

var argv = require('yargs')
    .options('location', {
        demand: false,
        alias: 'l',
        description: "your location goes here (city name or city name, country code)",
        type: 'string'
    })
    .help("help")
    .argv;

////////////////////////////////////////////////////////

if (typeof argv.l === "string" && argv.l.length > 0) {
    //console.log('has Location');
    weather(argv.l, function (currentWeather) {
      console.log(currentWeather);
      });
} else {
    console.log('no Location given. we will guess it.');
    location(function (location){
        "use strict";
       if (location){
           weather(location.city, function(currentWeather){
               console.log(currentWeather);
           });
       } else{
           console.log('Unable to guess location.');
       }
    })
}

