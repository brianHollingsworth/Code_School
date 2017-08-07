// Read File in Server
// Now that you know how to create an HTTP server and how to read a file off the
// filesystem in a non-blocking way, let's try to combine the two. Instead of
// just writing a string to the HTTP response, write the contents of index.html
// to the response instead.
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
   response.writeHead(200);
   fs.readFile('index.html', function(error, contents) {
      console.log(contents);
      response.write(contents);
      response.end();
  });
}).listen(8080);

