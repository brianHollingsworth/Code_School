// Challenge 5: Doing the Request
// We'll use the request module to make a simple web request and log the
// response to the console.
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

// 1.) To start, require the request module and assign the return function to a
//     variable.
var request = require('request');

// 2.) Next, issue a request to searchURL. Remember, the callback function for
//     the request function takes three arguments: error, response and body.
request(searchURL, function(error, response, body) {
    console.log(body);
});