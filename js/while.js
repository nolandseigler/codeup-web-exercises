// (function () {
// "use strict"
// // //while loop number 1
// // var i = 1
// // while (i < 65536) {
// //     i = i * 2;
// //     console.log(i);
// // }
// //ice cream do while loop
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// var currentCones = allCones;
// do {
// // This expression will generate a random number between 1 and 5
//     var conesUsersPurchased = Math.floor(Math.random() * 5) + 1;
//     console.log(`I start with ${allCones} cones. The user is purchasing ${conesUsersPurchased}.`);
//     if (currentCones - conesUsersPurchased > 0) {
//         console.log(conesUsersPurchased + " cones sold...")
//         currentCones = currentCones - conesUsersPurchased;
//     } else if (currentCones - conesUsersPurchased < 0) {
//         console.log("Cannot sell you " + conesUsersPurchased + " I only have " + currentCones + " ...");
//         conesUsersPurchased = currentCones;
//         console.log(conesUsersPurchased + " cones sold...");
//         currentCones = 0;
//         console.log("Yay! I sold them all!");
//     } else if (currentCones - conesUsersPurchased === 0) {
//         console.log("Yay! I sold them all!");
//         break;
//     } else if (currentCones === 0) {
//         console.log("Yay! I sold them all!");
//         break;
//     }
//     else {
//         console.log("Error");
//         break;
//     }
//
// } while (currentCones > 0);
//     this does not work
// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var conesUsersPurchased = Math.floor(Math.random() * 5) + 1;
//     if (conesUsersPurchased > allCones) {
//         //can't sell
//         var sadMessage = `Cannot sell you ${conesUsersPurchased}. I only have ${allCones}.`;
//         console.log(sadMessage);
//     } else {
//         //can't sell
//         allCones = allCones - conesUsersPurchased;
//         var happyMessage = `${conesUsersPurchased} cones sold. ${allCones} Cones to go.`;
//         console.log(happyMessage);
//     }
// } while (allCones < 0);
// console.log(`Yay! All cones sold.`);
//
// })();