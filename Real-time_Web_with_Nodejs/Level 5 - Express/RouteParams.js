// Challenge 2: Route Params
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

// 1.) Start by creating a GET route for '/quotes' that takes a name parameter
//     as part of the URL path.
app.get('/quotes/:name', function(request, response) {

    // 2.) Now, use the name parameter from the URL to retrieve a quote from the
    //     quotes object and write it out to the response. Note: No piping here,
    //     just write the quote string to the response like you did in previous
    //     levels (and then close the response).
    response.end(quotes[request.params.name]);
});

app.listen(8080);