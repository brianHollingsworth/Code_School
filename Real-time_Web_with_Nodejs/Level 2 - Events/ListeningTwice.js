// Challenge 4: Listening Twice
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

// 1.) Add a second 'request' handler to the HTTP server.
server.on('request', function(request, response) {
    // 2.) From inside the new handler, log the message "New request coming 
    //     in..." using console.log().
    console.log('New request coming in...');
})
  
server.listen(8080);