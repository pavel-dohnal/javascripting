var fs = require('fs');
var through = require('through');

var tr = through(function (buf) { 
	this.queue(buf.toString().toUpperCase()); 
});

process.stdin.pipe(tr).pipe(process.stdout);