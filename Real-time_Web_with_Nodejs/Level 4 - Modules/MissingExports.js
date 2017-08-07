// Challenge 1: Missing Exports
var highfive = function() {
  console.log("smack!!");
};

// 1.) Make highfive available to app.js
module.exports = highfive;

// Challenge 1 app.js
// var highfive = require('./high_five.js');
// highfive();