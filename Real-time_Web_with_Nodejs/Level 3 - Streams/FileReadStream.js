// Challenge 1: File Read Stream
var fs = require('fs');

// 1.) Use the fs module to create a Readable stream for fruits.txt. Store the
//     new stream in a variable called file.
var file = fs.createReadStream("fruits.txt");

// 2.) Listen to the 'readable' event on the newly created stream and give it a
//     callback.
file.on('readable', function() {
    // 3.) Read the data chunks from the stream and print them to the console.
    var chunk = null;
    while (null !== (chunk = file.read())) {
        // Some of the chunks might be binary, so we have to use toString().
        console.log(chunk.toString());
    }
});