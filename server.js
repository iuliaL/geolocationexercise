// node server to test getting geolocation API ;

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	var filePath = '.' + request.url;
	console.log(request.url);
	fs.readFile(filePath, function(error, content) {
			response.writeHead(200);
			response.end(content, 'utf-8');
		});
}).listen(8080,'127.0.0.1', function() {
	console.log('Server running at http://127.0.0.1:8080');
});


