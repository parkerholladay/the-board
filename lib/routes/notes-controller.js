(function(notes) {
    var repository = require('../repositories').notes;
    var guid = require('../utils').guid;

    notes.getCategories = function(req, res) {
        repository.getNoteCategories(function(err, noteCategories) {
            if(err) {
                res.status(500).send('Error getting categories: ' + err);
            } else {
                sendSuccessResponse(res, 200, noteCategories);
            }
        });
    }

    notes.saveCategory = function(req, res) {
        console.log(req.body);
        var categoryToInsert = {
            id: req.body.name.toLowerCase(),
            name: req.body.name
        };

        repository.updateNoteCategory(categoryToInsert, function(err) {
            if (err) {
                res.status(400).send('Error saving note category: ' + err);
            } else {
                sendSuccessResponse(res, 201, categoryToInsert);
            }
        });
    }

    notes.deleteCategory = function(req, res) {
        var category = req.params.category;

        repository.deleteNoteCategory(category, function(err) {
            if(err) {
                res.status(500).send('Error removing note category: ' + err);
            } else {
                sendSuccessResponse(res, 204);
            }
        });
    }

    notes.getNotes = function(req, res) {
        repository.getNotes(req.params.category, function(err, notes) {
            if(err) {
                res.status(500).send('Error getting notes: ' + err);
            } else {
                sendSuccessResponse(res, 200, notes);
            }
        });
    }

    notes.saveNote = function(req, res) {
        var category = req.params.category,
            noteToInsert = {
                note_id: guid.newGuid(),
                note: req.body.note,
                author: req.body.autor,
                color: req.body.color
            };

        repository.updateNote(req.params.category, noteToInsert, function(err) {
            if(err) {
                res.status(500).send('Error saving note: ' + err);
            } else {
                sendSuccessResponse(res, 201, noteToInsert);
            }
        });
    }

    notes.deleteNote = function(req, res) {
        var category = req.params.category,
            note = req.params.note;

        repository.deleteNote(category, note, function(err) {
            if(err) {
                res.status(500).send('Error removing note: ' + err);
            } else {
                sendSuccessResponse(res, 204);
            }
        });
    }

    function sendSuccessResponse(res, statusCode, body) {
        res.set('Content-Type', 'application/json');
        res.status(statusCode).send(body);
    }

})(module.exports);
