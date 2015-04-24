(function(routes) {
    var path = require('path');
        notes = require('./notes-controller');

    routes.init = function(app) {
        app.get('/', index);

        app.get('/api/notes', notes.getCategories);
        app.post('/api/notes', notes.saveCategory);
        app.get('/api/notes/all', notes.getNotes);

        app.get('*', index);

    }

    function index(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }

})(module.exports);
