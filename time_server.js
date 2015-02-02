var net = require('net');
var strftime = require('strftime')
var server = net.createServer(function (socket) {
	var d = new Date();
	socket.write(strftime("%F %H:%M", d) + '\r\n');
	socket.end();
});
server.listen(process.argv[2])
