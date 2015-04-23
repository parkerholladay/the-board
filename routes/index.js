(function(routes) {
    var path = require('path');

    routes.init = function(app) {
        app.get('/', index);

        app.get('*', index);

    }

    function index(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }

})(module.exports);
