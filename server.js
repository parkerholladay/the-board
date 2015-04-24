var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    routes = require('./lib/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

routes.init(app);

var server = http.createServer(app);
server.listen(1337, function() {
    console.log('Server listening on port ' + 1337);
});
