(function () {
"use strict";
//problem 1
const isOdd = function (inputFromPrompt) {
    while (inputFromPrompt % 2 === 0) {
        inputFromPrompt = (inputFromPrompt % 2 !== 0 ? "It is odd." : prompt("Please provide an odd number between 1 and 50."));
    }
    return console.log(inputFromPrompt);
}
var userNumber = prompt("Please provide an odd number between 1 and 50.");
isOdd(userNumber);
//problem 2




})();