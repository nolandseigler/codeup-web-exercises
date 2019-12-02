"use strict";
console.log("Hello from external JavaScript.");
alert("Welcome to my Website!");
var userPromptInput = prompt("What is your favorite color?");
alert(`${userPromptInput} is my favorite color too!`);

// Exercise 3
// Problem 1
var movieQtyInput = 0
var price = 3;
const checkForNumber = function (inputNumber) {
    while (typeof inputNumber !== "number") {
        inputNumber = prompt("Your input was not a number. How many days will you be renting the title?");
        return inputNumber;
    }
}
var littleMermaid = prompt("How many days will you be renting the Little Mermaid?");
littleMermaid = parseInt((checkForNumber(littleMermaid)));
var brotherBear = prompt("How many days will you be renting Brother Bear?");
brotherBear = parseInt((checkForNumber(brotherBear)));
var hercules = prompt("How many days will you be renting Hercules?");
hercules = ((checkForNumber(hercules)));
hercules = parseInt((checkForNumber(hercules)));
var confirmPurchase = confirm("You have requested to rent Hercules for " + hercules + " days, Brother Bear for " + brotherBear + " days, and the Little Mermaid for " + littleMermaid + " days. Is this correct?");


var rentingTotal = (littleMermaid + brotherBear + hercules) * price;
var confirmTotal = confirm(rentingTotal + " is your total. Click ok to continue to checkout");

// Problem 2
var google = 400;
var amazon = 380;
var facebook= 350;

var weeklyPay = (facebook * 10) + (google * 6) + (amazon * 4);
console.log(weeklyPay);
// // Problem 3
// var classFull = true;
// var scheduleConflict = true;
//
// if (classFull === false && scheduleConflict === false) {
//     console.log("You have enrolled in class.");
// } else if (classFull === true && scheduleConflict === false) {
//     console.log("Class is full you may not enroll at this time.");
// } else if (classFull === true) {
//     console.log("Class is full you may not enroll at this time.");
// } else if (scheduleConflict === true) {
//     console.log("This class conflicts with your current schedule you may not enroll at this time.");
// } else {
//     console.log("An error has occurred.");
// }