(function(notes) {
    var cassandra = require('cassandra-driver'),
        client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'the_board'});

    notes.getNoteCategories = function(callback) {
        var select = 'select category_id, display_name from note_categories;'
        client.execute(select, function(err, result) {
            callback(err, result.rows);
        })
    }

    notes.updateNoteCategory = function(category, callback) {
        var update = 'update note_categories set display_name = :name where category_id = :id;',
            params = { name: category.name, id: category.id };
        client.execute(update, params, { prepare: true }, function(err, result) {
            callback(err);
        });
    }

    notes.deleteNoteCategory = function(category, callback) {
        var query = 'delete from note_categories where category_id = :id;',
            params = { id: category };
        client.execute(query, params, { prepare: true }, function(err, result) {
            callback(err);
        });
    }

    notes.getNotes = function(category, callback) {
        var select = 'select note_id, note, author, color from notes where category_id = :id;',
            params = { id: category };
        client.execute(select, params, { prepare: true }, function(err, result) {
            callback(err, result.rows);
        });
    }

    notes.updateNote = function(category, note, callback) {
        var update = 'update notes set note = :note, author = :author, color = :color where category_id = :category_id and note_id = :note_id;',
            params = { note: note.note, author: note.author, color: note.color, category_id: category, note_id: note.note_id };
        client.execute(update, params, { prepare: true }, function(err, result) {
            callback(err);
        });
    }

    notes.deleteNote = function(category, note, callback) {
        var query = 'delete from notes where category_id = :category_id and note_id = :note_id;',
            params = { category_id: category, note_id: note };
        client.execute(query, params, { prepare: true }, function(err, result) {
            callback(err);
        });
    }

})(module.exports);
