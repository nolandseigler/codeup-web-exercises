//OPTION 1
// import {hello, goodbye, myFunctions} from './export-test.js'
//
// hello();
// goodbye()
// console.log(myFunctions.sum(1, 1));
// console.log(myFunctions.difference(1, 1));
//
//OPTION 2
import stuff from './export-test.js';
const {hello, goodbye, myFunctions} = stuff.funcs;
const {sum, difference} = myFunctions;

hello();
goodbye();
console.log(sum(2, 2));
console.log(difference(2, 2));
//