// Challenge 5: Listening for Close
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

// 1.) Listen for the 'close' event on the server. The event listener should
//     take a callback function that accepts no arguments.
server.on('close', function() {
    // 2.) Inside the 'close' callback, log the messge "Closing down the 
    //     server...".
    console.log("Closing down the server...");
});