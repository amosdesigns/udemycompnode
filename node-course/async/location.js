/**
 * Created by Jerome on 8/18/16.
 */
var request = require('request'),
location = "http://ipinfo.io";

/**
 * function location
 * @param callback
 * @return string
 */
module.exports = function (callback) {
    request({
            url: location,
            json: true
        },
        function (error, response, body) {
            if (error) {
                callback ('Error: Usable to fetch a location IP info.');
            } else {
                callback ( body );
            }
        });
};
