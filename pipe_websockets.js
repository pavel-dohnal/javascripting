var ws = require('websocket-stream');
var through = require('through')

var stream = through().pause().queue("hello\n").end()
var wsstream = ws('ws://localhost:8000');
stream.pipe(wsstream);
stream.resume();

//---or---
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8000');
// stream.end('hello\n');
