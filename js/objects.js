(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// const person = {
//     firstName: "Noland",
//     lastName: "Seigler"
//     }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    const person = {
        firstName: "Noland",
        lastName: "Seigler",
        sayHello: function() {
            return `Hello from ${this.firstName} ${this.lastName}!`
        }
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    const shopAtHeb = function () {
        shoppers.forEach(function (shopper) {
            if (shopper.amount > 200) {
                var discountPrice = shopper.amount - (shopper.amount * .12);
                var message = console.log(`${shopper.name}'s original price: ${shopper.amount}. ${shopper.name}'s final price: ${discountPrice}`);
            } else {
                var message = console.log(`${shopper.name}'s price: ${shopper.amount}.`);
            }
            return message;
        })
    }
    console.log(shopAtHeb());




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//THE PROMPTS THAT POP UP ON THE PAGE CREATE ALL OF THIS NOW. IT IS PART OF THE BONUS.
// var books = [
        // {title: "Book1",
        //  author: {
        //     firstName: "Bob",
        //     lastName: "Saggett"
        //  }
        // },
        // {title: "Book2",
        //     author: {
        //         firstName: "Jeff",
        //         lastName: "Saggett"
        //     }
        // },
        // {title: "Book3",
        //     author: {
        //         firstName: "Nancy",
        //         lastName: "Saggett"
        //     }
        // },
        // {title: "Book4",
        //     author: {
        //         firstName: "Susan",
        //         lastName: "Saggett"
        //     }
        // },
        // {title: "Book5",
        //     author: {
        //         firstName: "Leeroy",
        //         lastName: "Saggett"
        //     }
        // }
    // ]
    // console.log(books[0].author.firstName);
    // console.log(books[1].author.firstName);
    // console.log(books[2].author.firstName);
    // console.log(books[3].author.firstName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// const bookLoop = function(arr) {
//
//     arr.forEach(function(element, i) {
//        console.log(`Book # ${i}`);
//        console.log(`Title: ${element.title}`);
//        console.log(`Author: ${element.author.firstName} ${element.author.lastName}`);
//        console.log(`---`);
//     })
// }
// bookLoop(books);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
const createBooksList = function () {
    var booksList = [];
    var isAddBook = confirm("Would you like to add a book to Books List?");
        while(isAddBook) {
            let book = createBook(prompt("Title"), prompt( "Author"));
            booksList.push(book);
            isAddBook = confirm("Would you like to add another book to Books List?");
        }
      return booksList;
    }
const createBook = function (title, author){
    var splitAuthor = author.split(' ');
    let book = {title: title,
            author: {
                firstName: splitAuthor[0],
                lastName: splitAuthor[1]
            }
        }
    return book;
    }
const showBookInfo = function (book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
}

const bookLoopBonus = function(arr) {
     arr.forEach(function(element, i) {
            console.log(`Book # ${i + 1}`);
            showBookInfo(element);
            console.log(`---`);
        })
}
    let book6 = createBook("Yeehaw", "Mike", "Jones");
    let book7 = createBook("Cowboy", "Michael Scott");

// showBookInfo(book6);
// showBookInfo(book6);
    const createBooksList = function () {
        var booksList = [];
        var isAddBook = confirm("Would you like to add a book to Books List?");
        while(isAddBook) {
            let book = createBook(prompt("Title"), prompt( "Author"));
            booksList.push(book);
            isAddBook = confirm("Would you like to add another book to Books List?");
        }
        return booksList;
    }
    const createBook = function (title, author){
        var splitAuthor = author.split(' ');
        let book = {title: title,
            author: {
                firstName: splitAuthor[0],
                lastName: splitAuthor[1]
            }
        }
        return book;
    }
    let books = createBooksList();

bookLoopBonus(books);
})();