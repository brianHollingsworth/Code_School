// Convert Blocking
// Not everyone knows why it's important to write non-blocking programs in
// Node.js. One of these unfortunate souls has written some code to read a file
// off the file-system using the blocking function readFileSync. Convert the
// code to be non-blocking using the readFile function instead.
var fs = require('fs');

fs.readFile('index.html', function(error, contents) {
    console.log(contents);
});


