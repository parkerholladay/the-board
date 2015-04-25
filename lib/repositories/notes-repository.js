(function(notes) {
    var cassandra = require('cassandra-driver'),
        client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'the_board'});

    notes.getNoteCategories = function(callback) {
        var select = 'select category_id, display_name from note_categories;',
            results = [];
        client.eachRow(select, function(n, row) {
            results.push({ id: row.category_id, name: row.display_name });
        }, function(err, result) {
            callback(err, results);
        });
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
        var select = 'select category_id, note_id, note, author, color from notes where category_id = :id;',
            params = { id: category },
            results = [];
        client.eachRow(select, params, { prepare: true }, function(n, row) {
            results.push({ id: row.note_id, note: row.note, author: row.author, color: row.color });
        }, function(err, result) {
            callback(err, results);
        });
    }

    notes.updateNote = function(note, callback) {
        var update = 'update notes set note = :note, author = :author, color = :color where category_id = :category_id and note_id = :note_id;',
            params = { note: note.note, author: note.author, color: note.color, category_id: note.category_id, note_id: note.id };
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
