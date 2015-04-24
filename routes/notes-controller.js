(function(notes) {
    var repository = require('../repositories').notes;

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

    notes.getNotes = function(req, res) {
        repository.getNotes(function(err, notes) {
            if(err) {
                res.status(500).send('Error getting notes: ' + err);
            } else {
                sendSuccessResponse(res, 200, notes);
            }
        });
    }

    function sendSuccessResponse(res, statusCode, body) {
        res.set('Content-Type', 'application/json');
        res.status(statusCode).send(body);
    }

})(module.exports);
