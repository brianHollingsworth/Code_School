// Challenge 2: Emitting Events
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// 1.) On the chat object, emit the 'join' event and pass in a custom message as
//     a string.
chat.emit('join', 'This is a custom message.');

// 2.) Now emit the 'message' event on the chat object.
chat.emit('message', 'This is another custom message.');