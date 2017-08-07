// Challenge 4: Downloading Server
var fs = require('fs');
var http = require('http');

// 1.) Create an HTTP server that will serve index.html. Use pipe to send
//     index.html to the response.
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
  
}).listen(8080);