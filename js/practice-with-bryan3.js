//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
var testArr = [3, 7, 9, "3", "7", "9", true, false, "cat", "dog", 2, 4, 6, null, undefined, Infinity];
var employeeArr = [
    {
        name: "Bob",
        sales: 10
    },
    {
        name: "Bob",
        sales: 10
    },
    {
        name: "Bob",
        sales: 10
    }
];
var testStr = "This is a test string with the letter a and b and a and b.";
var arrOfStr = [testStr, testStr, testStr];
function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts an array of numbers and returns an array with all of the same numbers except for 3
const remove3s = inputArr => {
    var outputArr = [];
    var arrOf3s = [];
    inputArr.forEach(element => {
        if (!isNaN(element) && typeof element === "number" && element !== Infinity) {
            element === 3 ? arrOf3s.push(element) : outputArr.push(element);
        };
    });
    return outputArr;
}
console.log(remove3s(testArr));


// write a function named sumAll that returns the sum of all numbers in an array
const sumAll = inputArr => {
    var sum = 0
    inputArr.forEach(element => {
        if (!isNaN(element) && typeof element === "number" && element !== Infinity) {
            sum += element;
        };
    })
    return sum;
};
console.log(sumAll(testArr));


// once we have the sum of all numbers in an array we can use it for further math problems.




// write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
const countEvens = inputArr => {
    var evensCount = 0;
    var notEvensCount = 0;
    inputArr.forEach(element => {
        if (!isNaN(element) && typeof element === "number" && element !== Infinity) {
            parseInt(element) % 2 === 0 ? evensCount += 1 : notEvensCount += 1;
        };
    });
    return evensCount
};
console.log(countEvens(testArr));


// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales
const totalSales = inputArr => {
    var totalSales = 0;
    inputArr.forEach(object => {
        totalSales = object.sales + totalSales
    });
    return totalSales;
};
console.log(totalSales(employeeArr));


//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains
const AsAndBs = inputStr => {
    var arr = inputStr.split('');
    var counter = 0
    arr.forEach(letter => {
        if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'b') {
            counter++;
        };
    });
    return counter;
}
console.log(AsAndBs(testStr));


// Write a function called StringLength that returns the length of a string, if the input is not a string, return false
const stringLength = inputStr => {
    var length = 0;
  if (typeof inputStr !== "string") {
      return false;
  } else {
      var splitStr = inputStr.split('');
      splitStr.forEach(element => {
          length++;
      })

  }
  return length;
};
console.log(stringLength(testStr));


//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's
const makeObj = inputStr => {
    var obj = {
        word: inputStr,
        length: stringLength(inputStr),
        numAsandBs: AsAndBs(inputStr)
    }
    return obj;
}
console.log(makeObj(testStr));


// Write a function thataccepts an array of strings and returns an array of those words analyzed similarly
const makeArrOfObjs = inputArr => {
    var outputArr = [];
    if (Array.isArray(inputArr)) {
        console.log("isArray");
        inputArr.forEach(str => {
            outputArr.push(makeObj(str));
        });
    };
    return outputArr;
};
console.log(makeArrOfObjs(arrOfStr));

