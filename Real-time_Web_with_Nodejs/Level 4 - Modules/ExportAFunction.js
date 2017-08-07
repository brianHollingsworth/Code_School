// Challenge 2: Export a Function
var http = require('http');

// 1.) Move the myRequest function and the http require into my_request.js
var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};

// 2.) Export the myRequest function.
module.exports = myRequest;

// Challenge 2 - app.js
// 3.) Require the module in app.js
// var myRequest = require('./ExportAFunction);
// myRequest('Hello, this is dog.');