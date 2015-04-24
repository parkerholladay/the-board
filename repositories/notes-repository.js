(function(notes) {
    var cassandra = require('cassandra-driver'),
        client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'the_board'});

    notes.getNoteCategories = function(callback) {
        var select = 'select * from note_categories;'
        client.execute(select, function(err, result) {
            callback(err, result.rows);
        })
    }

    notes.updateNoteCategory = function(categoryToInsert, callback) {
        var insert = 'update note_categories set display_name = :name where category_id = :id';
        params = { name: categoryToInsert.name, id: categoryToInsert.id };
        client.execute(insert, params, { prepare: true } , function(err, result) {
            callback(err, result);
        })
    }

    notes.getNotes = function(callback) {
        var select = 'select * from notes;'
        client.execute(select, function(err, result) {
            callback(err, result.rows);
        })
    }

})(module.exports);
