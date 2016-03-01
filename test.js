var nodeStatic = require('node-static');

//
// Create a node-static server instance to serve the './www' folder
//
var file = new nodeStatic.Server('./www');

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		file.serve(request, response);
	}).resume();
}).listen(8080);
