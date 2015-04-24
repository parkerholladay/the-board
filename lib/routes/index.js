(function(routes) {
    var path = require('path');
        notes = require('./notes-controller');

    routes.init = function(app) {
        app.get('/', index);
        app.get('/partials/:name', partials);

        app.get('/api/notes', notes.getCategories);
        app.post('/api/notes', notes.saveCategory);
        app.delete('/api/notes/:category', notes.deleteCategory);
        app.get('/api/notes/:category', notes.getNotes);
        app.post('/api/notes/:category', notes.saveNote);
        app.delete('/api/notes/:category/:note', notes.deleteNote);

        app.get('*', index);
    }

    function index(req, res) {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    }

    function partials(req, res) {
        res.sendFile(path.join(__dirname, '../../public', req.params.name));
    }

})(module.exports);
