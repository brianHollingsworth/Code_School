// Challenge 1: Chat Emitter
var events = require('events');
var EventEmitter = events.EventEmitter;

// 1.) Create a new EventEmitter object and assign it to the variable called 'chat'.
var chat = new EventEmitter();

// 2.) Listen for the 'message' event on our new chat object.
chat.on('message', function(message) {
    // 3.) Log the message to the console.
    console.log(message);
});