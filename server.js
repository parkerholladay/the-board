var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser');
    app = express(),
    routes = require('./routes');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

routes.init(app);

var server = http.createServer(app);
server.listen(1337, function() {
    console.log('Server listening on port ' + 1337);
});
