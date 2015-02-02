var duplexer = require('duplexer');

var spawn = require('child_process').spawn;
    
module.exports = function (cmd, args) {
	var spwnd = spawn(cmd, args);
    return duplexer(spwnd.stdin, spwnd.stdout)
};
