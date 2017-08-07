// Challenge 4: URL Building
// Create a page which calls the Twitter search API and displays the last few
// results for Code School: http://search.twitter.com/search.json?q=codeschool
var url = require('url');

options = {
  // add URL options here
  // 1.) Add the protocol attribute to options.
  protocol: "http",
  // 2.) Add the host attribute to options.
  host: "search.twitter.com",
  // 3.) Add the pathname attribute to options.
  pathname: '/search.json',
  // 4.) Add an attribute which takes an object of query parameters. In this
  //     case, we only need q to search Twitter.
  query: { q: "codeschool" }
};

var searchURL = url.format(options);
console.log(searchURL);