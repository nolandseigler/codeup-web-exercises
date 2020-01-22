const mods = require('./node-test-modules.js');
// const {hello} = require('./node-test-modules.js');
const {hello, goodbye, myFunctions} = require('./node-test-modules')
mods.hello();
hello();
goodbye()
console.log(myFunctions.sum(1, 1));
console.log(myFunctions.difference(1, 1));