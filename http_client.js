var http = require('http');

var r = http.get(process.argv[2], function (re){
	re.setEncoding('utf8');
	re.on('error', function(e) {
	  console.log("Got error: " + e.message);
	})
	re.on('data', function(data){
		console.log(data);
	});
});

