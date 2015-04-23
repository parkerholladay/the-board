var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes');

routes.init(app);

var server = http.createServer(app);
server.listen(1337, function() {
    console.log('Server listening on port ' + 1337);
});
