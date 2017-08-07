// Challenge 3: Fixing Pipe
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

// 1.) Prevent pipe from automatically closing the writable stream.
file.pipe(destFile, {end: false});

file.on('end', function(){
  destFile.end('Finished!');
});

