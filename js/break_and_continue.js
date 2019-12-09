(function () {
"use strict";
//problem 1
//didnt use break need to refactor if that if time permits
const isOdd = function (inputFromPrompt) {
    while (inputFromPrompt % 2 === 0 || inputFromPrompt < 1 || inputFromPrompt >49) {
        inputFromPrompt = (inputFromPrompt % 2 !== 0 && inputFromPrompt >= 1 && inputFromPrompt <= 49 ? "It is odd." : parseInt(prompt("Please provide an odd number between 1 and 50.")));
    }
    console.log(`Number to skip is: ${inputFromPrompt}`)
    for (var i = 1; i <= 50; i++){
        if (i == inputFromPrompt) {
            console.log(`Yikes! Skipping number: ${i}`);
        } else if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
var userNumber = prompt("Please provide an odd number between 1 and 50.");
isOdd(userNumber);







})();