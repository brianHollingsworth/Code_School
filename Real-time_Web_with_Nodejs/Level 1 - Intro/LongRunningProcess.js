var http = require('http');

http.createServer(function(request, response) {
    response.writeHead("Dog is running.");
    setTimeout(function(){ // Represent long running process
        response.write("Dog is done.");
        response.end();
    }, 5000); // Sleep for 5 seconds
}).listen(8080);