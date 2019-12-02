"use strict";
// console.log("Hello from external JavaScript.");
// alert("Welcome to my Website!");
// var userPromptInput = prompt("What is your favorite color?");
// alert(`${userPromptInput} is my favorite color too!`);

// Exercise 3
// Problem 1
// var price = 3;
var inputNumber = 0
const checkForNumber = function (inputNumber) {
    while (typeof inputNumber !== "number") {
        inputNumber = prompt("Your input was not a number. Please answer the question with a number.");
        return inputNumber;
    }
}
// var littleMermaid = prompt("How many days will you be renting the Little Mermaid?");
// littleMermaid = parseInt((checkForNumber(littleMermaid)));
// var brotherBear = prompt("How many days will you be renting Brother Bear?");
// brotherBear = parseInt((checkForNumber(brotherBear)));
// var hercules = prompt("How many days will you be renting Hercules?");
// hercules = ((checkForNumber(hercules)));
// hercules = parseInt((checkForNumber(hercules)));
// var confirmPurchase = confirm("You have requested to rent Hercules for " + hercules + " days, Brother Bear for " + brotherBear + " days, and the Little Mermaid for " + littleMermaid + " days. Is this correct?");
//
//
// var rentingTotal = (littleMermaid + brotherBear + hercules) * price;
// var confirmTotal = confirm(rentingTotal + " is your total. Click ok to continue to checkout");

// Problem 2
var googleHourlyPay = 400;
var amazonHourlyPay = 380;
var facebookHourlyPay = 350;

var weeklyGoogleHours = prompt("How many hours did you work for Google this week?");
weeklyGoogleHours = parseInt((checkForNumber(weeklyGoogleHours)));
var weeklyAmazonHours = prompt("How many hours did you work for Amazon this week?");
weeklyAmazonHours = parseInt((checkForNumber(weeklyAmazonHours)));
var weeklyFacebookHours = prompt("How many hours did you work for Facebook this week?");
weeklyFacebookHours = parseInt((checkForNumber(weeklyFacebookHours)));

var confirmWeeklyHours = confirm("Weekly hours for Google: " + weeklyGoogleHours + " . " + "Weekly hours for Amazon: " + weeklyAmazonHours + " . " + "Weekly Facebook hours: " + weeklyFacebookHours + " . " + "Click ok to confirm hours.");
var weeklyTotalPay = (googleHourlyPay * weeklyGoogleHours) + (amazonHourlyPay * weeklyAmazonHours) + (facebookHourlyPay * weeklyFacebookHours);
alert("Your total weekly pay was submitted as: " + weeklyTotalPay + " .");

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