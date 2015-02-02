var uniq = require('uniq');

var str = prompt();
var splited = str.split(',');
console.log(uniq(splited));