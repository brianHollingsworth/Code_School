// Hello You
var http = require('http'); // How we require modules

http.createServer(function(request, response) {
    response.writeHead(200); // Status code in header
    response.write("Hello, this is Brian."); // Response body
    response.end(); // Close the connection
}).listen(8080); // Listen for connections on this port
console.log('Listening on port 8080...');