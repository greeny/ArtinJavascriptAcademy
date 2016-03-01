var nodeStatic = require('node-static');

var file = new nodeStatic.Server('./www');

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		file.serve(request, response);
	}).resume();
}).listen(8080);

console.log('Running server at localhost:8080');
