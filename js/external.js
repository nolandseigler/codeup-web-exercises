// "use strict";
// console.log("Hello from external JavaScript.");
// alert("Welcome to my Website!");
// var userPromptInput = prompt("What is your favorite color?");
// alert(`${userPromptInput} is my favorite color too!`);

// Exercise 3
// Problem 1
// var price = 3;
var inputNumber = 0;
var inputString = '';
const checkForNumber = function (inputNumber) {
    while (typeof inputNumber !== "number") {
        inputNumber = prompt("Your input was not a number. Please answer the question with a number.");
        return inputNumber;
    }
}
const checkForString = function (inputString) {
    while (typeof inputString !== "string") {
        inputString = prompt("Your input was not a class. Please answer the question with 'Science', 'Math', 'English', or 'History'.");
        return inputString;
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
// var googleHourlyPay = 400;
// var amazonHourlyPay = 380;
// var facebookHourlyPay = 350;
//
// var weeklyGoogleHours = prompt("How many hours did you work for Google this week?");
// weeklyGoogleHours = parseInt((checkForNumber(weeklyGoogleHours)));
// var weeklyAmazonHours = prompt("How many hours did you work for Amazon this week?");
// weeklyAmazonHours = parseInt((checkForNumber(weeklyAmazonHours)));
// var weeklyFacebookHours = prompt("How many hours did you work for Facebook this week?");
// weeklyFacebookHours = parseInt((checkForNumber(weeklyFacebookHours)));
//
// var confirmWeeklyHours = confirm("Weekly hours for Google: " + weeklyGoogleHours + " . " + "Weekly hours for Amazon: " + weeklyAmazonHours + " . " + "Weekly Facebook hours: " + weeklyFacebookHours + " . " + "Click ok to confirm hours.");
// var weeklyTotalPay = (googleHourlyPay * weeklyGoogleHours) + (amazonHourlyPay * weeklyAmazonHours) + (facebookHourlyPay * weeklyFacebookHours);
// alert("Your total weekly pay was submitted as: " + weeklyTotalPay + " .");

// // Problem 3
var science = {name: "Science", capacity: 40, assigned: 20, available: 20, time: 1000};
var math = {name: "Math", capacity: 30, assigned: 15, available: 15, time: 1300};
var english = {name: "English", capacity: 40, assigned: 39, available: 1, time: 1300};
var history = {name: "History", capacity: 50, assigned: 50, available: 0, time: 900};
var classes = [science, math, english, history];
var userCurrentClassTimesArray = [];

var userCurrentClassTimes = parseInt(prompt("How many classes are you currently scheduled for?"));
if (userCurrentClassTimes >= 1) {
    switch (userCurrentClassTimes) {
        case 1:
             var firstCourseTime = parseInt(prompt("What time is your first course?"));
             userCurrentClassTimesArray.push(firstCourseTime);
            break;
        case 2:
            var firstCourseTime = parseInt(prompt("What time is your first course?"));
            userCurrentClassTimesArray.push(firstCourseTime);
            var secondCourseTime = parseInt(prompt("What time is your second course?"));
            userCurrentClassTimesArray.push(secondCourseTime);
            break;
        case 3:
            var firstCourseTime = parseInt(prompt("What time is your first course?"));
            userCurrentClassTimesArray.push(firstCourseTime);
            var secondCourseTime = parseInt(prompt("What time is your second course?"));
            userCurrentClassTimesArray.push(secondCourseTime);
            var thirdCourseTime = parseInt(prompt("What time is your third course?"));
            userCurrentClassTimesArray.push(thirdCourseTime);
            break;
        default:
            console.log("Error at switch.");
    }
}
var userSelectedClass = prompt("Would you like to sign up for Science, Math, English, or History class?").toLowerCase();
// userSelectedClass = (checkForString(userSelectedClass)); prompts are strings need to fix to where it checks for words vs nums.
if (userSelectedClass === 'science' || userSelectedClass === 'math' || userSelectedClass === 'english' || userSelectedClass === 'history') {
    console.log(userSelectedClass);
    console.log()
    if (Object.values(userSelectedClass)[3] > 0 && userCurrentClassTimesArray.includes(Object.values(userSelectedClass)[4]) === false) {
        console.log("You did it.");
    }
}
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