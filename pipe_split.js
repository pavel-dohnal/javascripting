var split = require('split');
var through = require('through');
var cnt = 1;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
    	var x = line.toString();
    	if ((cnt++) % 2 == 0) {
    		x = x.toUpperCase();
    	} else {
    		x = x.toLowerCase();
    	}
        this.queue(x + "\n");
    }))
    .pipe(process.stdout)
;
