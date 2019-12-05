(function () {
"use strict";


// Define a function named isString that takes in a value and returns a boolean if the argument provided is a string or not.
const isString = function (inputValue) {
    return typeof inputValue === "string";
}




console.log(isString(2)); //false
console.log(isString(true)); //false
console.log(isString("yes")); //true


// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.
const isNotString = function (inputValue) {
    return typeof inputValue !== "string";
}



console.log(isNotString(2)); //true
console.log(isNotString(true)); //true
console.log(isNotString("yes")); //false



// Define a function named isNotEmptyString that takes in a value and returns a boolean if the argument provided is an empty string or not.
const isNotEmptyString = function (inputValue) {
    return ((typeof inputValue === "string" && inputValue.length > 0) ? true : false);
}




console.log(isNotEmptyString(2)); //false
console.log(isNotEmptyString(false)); //false
console.log(isNotEmptyString(true)); //false
console.log(isNotEmptyString("yes")); //true
console.log(isNotEmptyString("")); //false
console.log(isNotEmptyString("banana")); //true


// Define a function named isANumber that takes in a value and returns true if the input is a number.
    const isANumber = function (inputValue) {
        return ((typeof inputValue === "number") ? true : false);
    }


// console.log(isANumber(2)); //true
// console.log(isANumber("yes")); //false
// console.log(isANumber(false)); //false
// console.log(isANumber(true)); //false
// console.log(isANumber("5")); //false


// Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
    const isNumeric = function (inputValue) {
        return ((!isNaN(inputValue)) ? true : false);
    }




// console.log(isNumeric(2)); //true
// console.log(isNumeric("yes")); //false
// console.log(isNumeric(false)); //false
// console.log(isNumeric(true)); //false
// console.log(isNumeric("5")); //true


// Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.
    const isZero = function (inputValue) {
        return ((parseInt(inputValue) === 0 ? true : false));
    }



console.log(isZero(2)); //false
console.log(isZero(12)); //false
console.log(isZero("yes")); //false
console.log(isZero(false)); //false
console.log(isZero(true)); //false
console.log(isZero("5")); //false
console.log(isZero(0)); //true
console.log(isZero("0")); //true


// Define a function named isMoreThanTen that accepts a number and returns true or false based on whether the input is more than ten.
const isMoreThanTen = function (inputValue) {
    return ((inputValue) > 10 ? true : false);
}



console.log(isMoreThanTen(2)); //false
console.log(isMoreThanTen(12)); //true
console.log(isMoreThanTen("yes")); //false
console.log(isMoreThanTen(false)); //false
console.log(isMoreThanTen(true)); //false
console.log(isMoreThanTen("5")); //false



// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.
    const isNegative = function (inputValue) {
        if (!isNaN(inputValue)) {
            var floatedInputValue = parseFloat(inputValue);
            return (floatedInputValue < 0 ? true : false);
        } else {
            return false;
        }

    }



console.log(isNegative(-2)); //true
console.log(isNegative(12)); //false
console.log(isNegative("yes")); //false
console.log(isNegative(false)); //false
console.log(isNegative(true)); //false
console.log(isNegative("5")); //false

})();





