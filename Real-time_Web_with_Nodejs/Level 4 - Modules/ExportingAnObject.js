// Challenge 3: Exporting an Object
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};

// 1.) Export the info function so we can use it in app.js by assigning it to
//     the exports object.
exports.info = info;

// 2.) Export the warn function so we can use it in app.js by assigning it to
//     the exports object.
exports.warn = warn;

// 3.) Export the error function so we can use it in app.js by assigning it to
//     the exports object.
exports.error = error;

// Challenge 3 - app.js
// var logger = require('./logger');

// logger.info('This is some information');
// logger.warn('something bad is happening');