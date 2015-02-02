var module = require('./dir_module');

var ext = process.argv[3];
var dir = process.argv[2];
module(dir, ext, function (err, data) {
	if (err) {
		return;
	}
	for (var i = 0, len = data.length; i < len; i++) {
		console.log(data[i]);
	};
});