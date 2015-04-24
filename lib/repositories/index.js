(function(repositories) {
	var notesRepository = require('./notes-repository');

	repositories.notes = notesRepository;

})(module.exports);
