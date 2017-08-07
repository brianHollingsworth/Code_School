// Challenge 6: Express Server
// Now, let's create an Express server which queries out for the search term and
// then returns the JSON.
var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
// 1.) Require the express module.
var express = require('express');
// 2.) Create the Express server and name it app.
var app = express();

// 3.) Create a route for GET requests to / (root path). Remember, the callback
//     function takes two arguments: a request req and a response res.
app.get('/', function(req, res) {
    // 4.) In our new route, issue a request to searchURL and pipe the results
    //     into the response.
    request(searchURL).pipe(res);
});

// 5.) Finally, tell app to listen on port 8080.
app.listen(8080);