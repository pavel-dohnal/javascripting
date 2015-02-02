var bl = require('bl');
var http = require('http');

var r = http.get(process.argv[2], function (re){
	re.setEncoding('utf8');
	re.pipe(bl(function (err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));	
});


