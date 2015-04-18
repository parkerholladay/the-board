var http = require('http');
var express = require('express');
var routes = require('./routes');

var app = express();

routes.init(app);

var server = http.createServer(app);
server.listen(1337, function() {
	console.log('Server listening on port ' + 1337);
});
