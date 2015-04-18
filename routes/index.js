(function(routes) {
	var path = require('path');

	routes.init = function(app) {
		app.get('*', function(req, res) {
			res.sendFile(path.join(__dirname, '../public/index.html'));
		});
	}

})(module.exports);
