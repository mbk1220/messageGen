var message = "Hi there! ";
var wordBank = ["What are you doing today?", "What are you doing tomorrow?", "What did you do yesterday?", "Did you have fun?", "When are you doing something fun?"];

var randomNumber = Math.floor(Math.random() * wordBank.length);

console.log(message + wordBank[randomNumber]);