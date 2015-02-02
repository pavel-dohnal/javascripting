
module.exports = function (dir, ext, callback) {
	var fs = require('fs')
	var uext = '.' + ext;
	fs.readdir(dir, function (err, list) {
		if (err) {
			callback(err, null);
			return;
		}
		var filtered = list.filter(function(file) {
			return file.substr(-1 * uext.length) === uext;
		});
		callback(null, filtered);
	});

}