/**
 * Created by Jerome on 8/23/16.
 */
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {
        var thisDate = new Date().toString();
        console.log('   Request: '+thisDate+':: '+req.method + ' => '+ req.originalUrl);
        next();
    }

};
 module.exports = middleware;
