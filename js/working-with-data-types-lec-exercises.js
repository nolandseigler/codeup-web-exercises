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
var moreThanTwoItems = false;
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
// Problem 4 version b
var moreThanTwoItemsVb = false;
var offerStillValidVb = true;
var isPremiumMemberVb = true;

var discountAvailable = offerStillValidVb && (moreThanTwoItemsVb || isPremiumMemberVb);
if (discountAvailable) {
    console.log("Purchase successful.");
} console.log("Purchase failed.");

// Exercise 4
var userUsername = 'codeup';
var userPassword = 'notastrongpassword';
var usernameAndPasswordRequirements = {passwordMinLength: false, doesntContainUsername: false, usernameMaxLength: false, passWhiteSpaceTest: false};
// console.log(usernameAndPasswordRequirements);
const accountCreation = function (inputUsername, inputPassword) {
    if (inputPassword.length >= 5 && !inputPassword.includes(inputUsername) && inputUsername.length <= 20 && inputPassword[0] != " "  && inputPassword[inputPassword.length - 1] !== " " && inputUsername[0] !== " " && inputUsername[inputUsername.length - 1] !== " ") {
        usernameAndPasswordRequirements = {passwordMinLength: true, doesntContainUsername: true, usernameMaxLength: true, passWhiteSpaceTest: true};
        console.log("Username and password meet minimum requirements.");
        return usernameAndPasswordRequirements;
    } else {
        console.log("Your username must be no more than 20 characters. Passwords must contain 5 or more characters. Ensure that your password does not include your username. Passwords and usernames may not start or end with white spaces.");
    }
}

accountCreation(userUsername, userPassword);




// console.log(/\s/.test(username));
// var usernameAndPasswordRequirements = {passwordMinLength: true, doesntContainUsername: true, usernameMaxLength: true, passWhiteSpaceTest: true};
// console.log(usernameAndPasswordRequirements);

// && inputUsername.indexOf(' ') >= 0 && inputPassword.indexOf(' ') >= 0

