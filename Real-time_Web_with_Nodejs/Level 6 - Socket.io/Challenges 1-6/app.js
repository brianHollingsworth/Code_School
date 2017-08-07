// Challenge 1: Setting Up socket.io Server-side
// So far we've created an Express server. Now we want to start building a
// real-time Q&A moderation service and we've decided to use socket.io.

// Challenge 4: Broadcasting Questions
// When a question is submitted to our server, we want to broadcast it out to
// all the connected clients so they can have a chance to answer it.

// Challenge 5: Saving Client Data
// We want to allow each client only one question at a time.

// Challenge 6: Answering Questions
// Clients can also answer each other's questions.
var express = require('express');
var app = express();

// 1.1.) Using the http module, create an new http server and pass the express
//       app as the listener for that new server.
var server = require('http').createServer(app);

// 1.2.) Using the socket.io module, listen for requests on the http server.
//       Store the return object of this operation in a variable called io.
var io = require('socket.io')(server);

// 1.3.) Use the object stored in io to listen for client 'connection' events.
io.on('connection', function(client) {
    // 1.4.) When a new client connects, log a message using console.log().
    console.log('Client connected...');

    // 4.1.) In the server, listen for 'question' events from clients.
    client.on('question', function(question) {
        // 4.2.) Emit the 'question' event on all the other clients connected,
        //       passing them the question data.
        // *** After challenge 5, this code is no longer used.
        // client.broadcast.emit('question', question);


        // 5.3.) When a client emits a 'question' event, check to make sure
        //       question_asked is not already set to true.
        if (!client.question_asked) {
            // 5.1.) When a client emits a 'question' event, we want to set the
            //       value of question_asked to true.
            client.question_asked = true;
            // 5.2.) When a client emits a 'question' event, we want to
            //       broadcast that question to the other clients.
            client.broadcast.emit('question', question);
        }
    });

    // 6.1.) With the client, listen for the 'answer' event from clients. 
    client.on('answer', function(question, answer) {
        // 6.2.) Emit the 'answer' event on all the other clients connected.
        client.broadcast.emit('answer', question, answer);
    });
});

// 1.5.) Finally, tell our http server to listen to requests on port 8080.
server.listen(8080);