// Exercise 3
// Problem 1
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;

var price = 3;

var totalIfAllDays = (littleMermaid + brotherBear + hercules) * 3;
console.log(totalIfAllDays)
// Problem 2
var google = 400;
var amazon = 380;
var facebook= 350;

var weeklyPay = (facebook * 10) + (google * 6) + (amazon * 4);
console.log(weeklyPay);
// Problem 3
 var classFull = true;
 var scheduleConflict = true;

 if (classFull === false && scheduleConflict === false) {
     console.log("You have enrolled in class.");
 } else if (classFull === true && scheduleConflict === false) {
     console.log("Class is full you may not enroll at this time.");
 } else if (classFull === true) {
     console.log("Class is full you may not enroll at this time.");
 } else if (scheduleConflict === true) {
     console.log("This class conflicts with your current schedule you may not enroll at this time.");
 } else {
     console.log("An error has occurred.");
 }
 // Probelem 4
var moreThanTwoItems = true;
var offerStillValid = true;
var isPremiumMember = true;

if (moreThanTwoItems && offerStillValid) {
    console.log("Purchase successful.");
} else if (isPremiumMember && offerStillValid) {
    console.log("Purchase successful. Thanks for being a premium member.");
} else if (!offerStillValid) {
    console.log("Purchase failed. The offer has expired.");
} else if (!moreThanTwoItems) {
    console.log("Purchase failed. You must purchase at least two items or upgrade to premium membership.");
} else {
    console.log("An error has occurred.");
}
// Exercise 4
var username = 'codeup';
var password = 'notastrongpassword';
var passwordMinLength = false;
var doesntContainUsername = false;
var passwordMaxLength = false;
var passWhiteSpaceTest = false;

var usernameAndPasswordRequirements = {passwordMinLength: true, doesntContainUsername: true, passwordMaxLength: true, passWhiteSpaceTest: true};
console.log(usernameAndPasswordRequirements);

