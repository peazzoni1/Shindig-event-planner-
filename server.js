var express    = require('express');
var app        = express();
var passport = require('passport');
var session = require('express-session');
var jwt = require('express-jwt');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
       res.sendfile(__dirname + '/index.html');
   });

//start server
app.listen(port);
console.log('The party started on port ' + port);
