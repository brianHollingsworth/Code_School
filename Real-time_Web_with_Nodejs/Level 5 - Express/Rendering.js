// Challenge 3: Rendering
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response) {
  var quote = quotes[request.params.name];
  
  // 1.) First, render the quote.ejs template to the response.  
  response.render('quote.ejs', {
      // 2.) Next, make the name and the quote data available to the template.
      name: request.params.name,
      quote: quote
  });
});

app.listen(8080);