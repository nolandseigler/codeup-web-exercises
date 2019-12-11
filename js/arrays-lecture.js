(function () {
"use strict"

// //Selects random cat name and fruit name. Makes a new name by combining
// const makeCatFruit = function () {
//     var catNames = ["Scrappy", "Mr. Meow", "Sebastian", "Lucy", "Whiskas", "Tom", "Leeroy", "Suzie"];
//     var fruitNames = ["Apple", "Mango", "Banana", "Strawberry", "Blueberry", "Peach"];
//     var catNumber = Math.floor(Math.random() * 7);
//     var fruitNumber = Math.floor(Math.random() * 5);
//     var catFruit = fruitNames[fruitNumber] + " " + catNames[catNumber] ;
//     alert(`Your Cat Fruit is: ${catFruit}`);
//     var fruitAgain = confirm("Would you like to make another Cat Fruit?");
//     if (fruitAgain) {
//         makeCatFruit();
//     }
//
// }
// makeCatFruit();
var paragraph = "This is a bunch of words. I am typing this so I can split with a. I will then try to splice out the empty string created by this period."


var sentence = "The quick brown fox jumps over the lazy dog";
//use this to capitalize each word of a string. it converts all toLowerCase, splits string into arrays by the space delimiter, runs a for loop that iterates through the new array. while iterating it sets the value of the array element that is in the hopper (splitStr[i]) and sets it equal itself but with the first character extracted, capitalized and then concat to the substring starting at index 1 and ending with the end of the string. OUTSIDE OF THE FOR LOOP it returns the arrays joined back into a string by the space delimiter.
    const titleCase = function (str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    console.log(titleCase(sentence));
var words = sentence.split(' ');
console.log(words.slice(words.indexOf("quick"), words.indexOf("brown") + 1));


})();


