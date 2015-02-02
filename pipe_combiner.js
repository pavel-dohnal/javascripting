var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');
    
module.exports = function () {
	var genre;
	var books;
	var input = through(write, end);
    return combine(split(), input, zlib.createGzip());

    function write(row) {
    	if (row.length === 0) return;
    	var jsoned = JSON.parse(row);
    	if (jsoned.type == 'genre') {
    		if (books) {
                this.queue(JSON.stringify(books) + '\n');
            }
            books = { name: jsoned.name, books: [] };
    	} else {    		
    		books.books.push(jsoned.name);
    	}
    }
    function end () { 
    	if (books) {
    		this.queue(JSON.stringify(books) + '\n'); 
    	}
    	this.queue(null);
    }
}
