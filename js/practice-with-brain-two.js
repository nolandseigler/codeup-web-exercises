"use strict";

//define a function names addFive that takes an input and adds 5, if the input is NOT numeric the function should return false.
// const addFive = function (input) {
//     input = parseInt(input);
//     input+=5
//     if (!isNaN(input)) {
//         return input;
//     } else {
//         return false;
//     }
// }
//
//
// console.log(addFive("2")); // 7
// console.log(addFive(5)); // 10
// console.log(addFive(true)); // false
// console.log(addFive("cat")); // false


//define a function names toTheThird that takes an input and returns that input to the third power (cubed); if the input is not numeric the function should return false
const toTheThird = function (input) {
    input = parseInt(input);
    if (!isNaN(input)) {
        return input * input * input;
    } else {
        return false;
    }
}
//
// console.log(toTheThird("2")); // 8
// console.log(toTheThird(5)); // 125
// console.log(toTheThird(true)); // false
// console.log(toTheThird("cat")); // false


// Define a function named lowerCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
// const lowerCase = function (inputStr) {
//     if (typeof inputStr !== "string") {
//         return false;
//     } else if (isNaN(inputStr)) {
//         return inputStr.toLowerCase();
//     } else {
//         return false;
//     }
//
//
// }
//
//
// console.log(lowerCase("2")); // false
// console.log(lowerCase(5)); // false
// console.log(lowerCase(true)); // false
// console.log(lowerCase("CAT")); // CAT


// Write a function named sumOfCubes that takes in two inputs. If both inputs are numeric, sumOfCubes should cubes each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfCubes should return false.
// NOT CORRECT YET
const sumOfCubes = function (num1, num2) {
    if (!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
        var intNum1 = parseInt(num1);
        var intNum2 = parseInt(num2);
        return toTheThird(intNum1) + toTheThird(intNum2);
    } else {
        return false;
    }
}


// console.log(sumOfCubes("2", "5")); //8 + 125 = 133
// console.log(sumOfCubes(5, 4)); //125 + 64 = 189
// console.log(sumOfCubes(true, true)); //false
// console.log(sumOfCubes("cat", "dog")); //false


// Write a function named divide that takes in two inputs. If both inputs provided are numeric, divide returns the result of the first input multiplied by the second. If either or both inputs are not numeric, divide should return false.
const divide = function (num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (isNaN(num1) || isNaN(num2)) {
        return false
    } else if (num2 === 0) {
        return false
    } else {
        return num1 / num2;
    }
}
//
//
// console.log(divide("12", "4")); // 12 / 4 = 3
// console.log(divide(20, 6)); // 20 / 6 = 3.33333~
// console.log(divide(true, true)); // false
// console.log(divide("cat", "dog")); //false

//hey, aren't there special rules when it comes to dividing with or by 0???

// console.log(divide(0, 12));
// console.log(divide(12, 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Write a function named reverseUpperCaseString that takes in a single input. If the input is a numeric string, then return false. If the input is a string, return that string capitalized and reversed
const reverseUpperCaseString = function (x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof (x) !== "string") {
        return false;
    } else {
        x = (x.split("").reverse().join("")).toUpperCase();
        return x;
    }
}




// console.log(reverseUpperCaseString(true)); // false
// console.log(reverseUpperCaseString(18)); // false
// console.log(reverseUpperCaseString("15")); // false
// console.log(reverseUpperCaseString("cat")); // TAC
// console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
// console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY



// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
const getLowestNumber = function (x, y, z) {
    return (!isNaN(parseInt(x)) && !isNaN(parseInt(y)) && !isNaN(parseInt(z))) ? Math.min(x, y, z) : false;
}






console.log(getLowestNumber(1, 15, 30)); // 1
console.log(getLowestNumber(true, false, true)); // false
console.log(getLowestNumber("1", "15", "30")); // 1
console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
console.log(getLowestNumber(1, "otter", 30)); // false
console.log(getLowestNumber(-53, 72, 7)); // -53









