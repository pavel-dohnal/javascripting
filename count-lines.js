var fs = require('fs')

var name = process.argv[2];
var buf = fs.readFileSync(name);
var str = buf.toString().trim().split("\n");
console.log(str.length - 1);