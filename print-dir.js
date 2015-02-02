var fs = require('fs')

var ext = '.' + process.argv[3];
fs.readdir(process.argv[2], function (err, list) {
	var filtered = list.filter(function(file) {
		return file.substr(-1 * ext.length) === ext;
	});
	for (var i = 0, len = filtered.length; i < len; i++) {
		console.log(filtered[i]);
	};
});