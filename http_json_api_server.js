var url = require('url');
var http = require('http');


var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var parsed = url.parse(request.url, true);
	var d = new Date(parsed.query.iso);
	var result = {};
	if (parsed.pathname == '/api/parsetime') {		
		result.hour = d.getHours();
		result.minute = d.getMinutes();
		result.second = d.getSeconds();
	} else if (parsed.pathname == '/api/unixtime') {
		result.unixtime = d.getTime();
	}
	response.end(JSON.stringify(result));
});
server.listen(process.argv[2]);