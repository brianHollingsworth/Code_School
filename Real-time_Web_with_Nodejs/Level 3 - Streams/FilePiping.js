// Challenge 2: File Piping
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

// 1.) Instead of manually listening for the 'readable' event on the Readable
//     stream, use pipe to read from the stream and write directly to
//     process.stdout.
file.pipe(process.stdout);