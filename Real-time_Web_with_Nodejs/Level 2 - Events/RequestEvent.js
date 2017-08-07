// Challenge 3: Request Event
var http = require('http');

// 1.) Add an event listener on the server variable that listens to the request
//     event. The event listener should take a callback function with two
//     arguments, request and response.
server.on('request', function(request, response) {
    // 2.) Move the logic for handling the request from the 'http.createServer()'
    //     callback to your new 'request' event listener.
    response.writeHead(200);
    response.write("Hello, this is dog");
    response.end();
});

server.listen(8080);