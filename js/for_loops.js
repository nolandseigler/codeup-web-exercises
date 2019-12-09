(function () {
"use strict"
const showMultiplicationTable = function (inputNumber) {
    //ran out of time for input validation
    // (!isNaN && typeofinput ? parseFloat(inputNumber) : console.log("Provide a number or numeric string"));
    for (var i = 1; i <= 10; i++) {
        var result = inputNumber * i;
        console.log(inputNumber + " x " + i + " = " + result);
    }
}
showMultiplicationTable(7);
for (var i = 0; i < 10; i++) {
    // This is how you get a random number between 20 and 200
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    var result = ((randomNumber % 2 === 0 ? `${randomNumber} is even.`  : `${randomNumber} is odd.`));
    console.log(result);
}
for (var i = 100; i > 0; i-=5) {
    console.log(i);
}







})();