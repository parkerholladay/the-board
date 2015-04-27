(function(routes) {
    var path = require('path');
        notes = require('./notes-controller');

    routes.init = function(app) {
        app.get('/', index);
        app.get('/partials/:partial', partials);

        app.get('/api/categories', notes.getCategories);
        app.post('/api/categories', notes.saveCategory);
        app.delete('/api/categories/:id', notes.deleteCategory);
        app.get('/api/notes/:category', notes.getNotes);
        app.post('/api/notes/:category', notes.saveNote);
        app.delete('/api/notes/:category/:id', notes.deleteNote);

        app.get('*', index);
    }

    function index(req, res) {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    }

    function partials(req, res) {
        res.sendFile(path.join(__dirname, '../../public', req.params.partial));
    }

})(module.exports);
