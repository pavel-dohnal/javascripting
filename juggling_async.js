var async = require('async');
var http = require('http');
var bl = require('bl');

async.eachSeries([process.argv[2], process.argv[3], process.argv[4]], function (url, call) {
	http.get(url, function (re){
		re.setEncoding('utf8');
		re.pipe(bl(function (err, data) {
			console.log(data.toString());
			call();
		}));
	});
});
