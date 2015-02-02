var concat = require('concat-stream');

process.stdin.pipe(concat(function (data) {
    var s = data.toString()
    console.log(s.split("").reverse().join(""));
}));