const mods = require('./node-modules-test.js');
// const {hello} = require('./node-modules-test.js');
const {hello, goodbye, myFunctions} = require('./node-modules-test')
mods.hello();
hello();
goodbye()
console.log(myFunctions.sum(1, 1));
console.log(myFunctions.difference(1, 1));