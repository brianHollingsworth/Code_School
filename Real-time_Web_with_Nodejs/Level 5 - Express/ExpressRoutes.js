// Challenge 1: Express Routes
var express = require('express');
var app = express();

// 1.) Create a GET route for '/tweets' and give it the proper callback. The
//     callback function should accept two arguments: the request and the
//     response.
app.get('/tweets', function(request, response) {

    // 2.) Send back the file tweets.html, which lives under the project's root \
    //     path. Remember to use __dirname to locate tweets.html.
    response.sendFile(__dirname + "/tweets.html");

});

// 3.) Finally, have the express app listen on port 8080.
app.listen(8080);

// Challenge 1 - tweets.html
// <html>
//   <ul>
//     <li>Real Time Web with Node.JS Launched!</li>
//     <li>Node.js Rules!</li>
//   </ul>
// </html>