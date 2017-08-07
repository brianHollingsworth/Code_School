// Challenge 5: Persisting Questions
// Challenge 6: Emitting Stored Questions
// Challenge 7: Limiting Questions Stored
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
    // 6.1.) Use the lrange command to retrieve a list of questions that
    //       represent the questions list within redis.
    redisClient.lrange('questions', 0, -1, function(error, questions) {
        // 6.2.) Inside of the lrange callback, use a forEach loop to iterate
        //       through the questions and emit() each question to the client.
        questions.forEach(function(question) {
            client.emit("question", question);
        });
    });

    client.on('answer', function(question, answer) {
        client.broadcast.emit('answer', question, answer);
    });

    client.on('question', function(question) {
        if (!client.question_asked) {
            client.question_asked = true;
            client.broadcast.emit('question', question);
            // 5.1.) Use the lpush command to add new questions to the list
            //       named questions. Do this inside the listener for the
            //       'question' event.
            redisClient.lpush('questions', question, function() {
                // 7.1.) Add a callback to lpush that will be used to limit the
                //       size of the list down to a max of 20.
                redisClient.ltrim("questions", 0, 19);
            });
        }
    });
});