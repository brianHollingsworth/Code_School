// Challenge 1: Simple Redis Commands
// Challenge 2: Get A Key
// Challenge 3: Working with Lists 1
// Challenge 4: Working with Lists 2

// 1.1.) Require the redis module and assign it to a variable called redis.
var redis = require('redis');

// 1.2.) Create a redis client and assign it to a variable called client.
var client = redis.createClient();

// 1.3.) On the redis client, set the key name to your name.
client.set('name', 'Brian');

// 2.1.) Use the redis client to issue a get command using the 'question' key to
//       retrieve a value.
client.get('question', function(error, data) {
    // 2.2.) Log the value retrieved with console.log();
    console.log(data);
});

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

// 3.1.) Using the redis client's lpush command, insert question1 into the
//       questions list. Then, console.log the result you receive.
client.lpush('questions', question1, function(error, data) {
    console.log(data);
});

// 3.2.) Using the redis client's lpush command, insert question2 into the
//       questions list. Then, console.log the result you receive.
client.lpush('questions', question2, function(error, data) {
    console.log(data);
})

// 4.1.) Use the lrange() command to return all of the items from the questions
//       key.
client.lrange('questions', 0, -1, function(error, data) {
    // 4.2.) Now that we have called lrange(), use console.log to log the result
    //       from redis.
    console.log(data);
});