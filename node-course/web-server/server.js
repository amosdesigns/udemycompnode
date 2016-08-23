/**
 * Created by Jerome on 8/19/16.
 */
var express = require('express'),
    PORT = 3000,
    app = express();

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
app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,  function (req, res) {
res.send('About Us');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT, function () {
 console.log('Express Server started on PORT: '+PORT+"!");
});
