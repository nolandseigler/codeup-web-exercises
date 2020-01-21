
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const trilinguists = users.filter(user => user.languages.length >= 3);
// console.log(languagesArr);
const emailsArr = users.map(user => user['email']);

const averageYearsExperience = () => {
    let i = 0;
    const totalYearsExperience = users.map(user => user['yearsOfExperience']).reduce((total, experience) => {
        // console.log(experience);
        total = experience + total;
        i++;
        return total;
    }, 0);
    return parseInt(totalYearsExperience / i);
}


const longestEmail = emailsArr.reduce((accum, email) => {
    return email.length > accum.length ? accum = email : accum = accum;
}, '');

// const getInstructors = inputStr => {
//     const instructors = inputStr.split(' '); // transform a sentence into an array of words
//     const userList = users.map(user => user['name']);
//     const instructorsObject = instructors.reduce((accum, word) => {
//
//         if (typeof accum[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             console.log(word);
//             let newWord = word.replace(',', '');
//             console.log(newWord);
//             if (userList.includes(newWord)) {
//                 accum[newWord] = newWord;
//             };
//
//         }
//         return accum;
//     }, {}); // start with an empty object
//     return Object.keys(instructorsObject);
//
// };

// // console.log(emailsArr);
// console.log(averageYearsExperience());
// console.log(longestEmail);
// console.log(getInstructors('Your instructors are: ryan, luis, zach, fernando, justin.'
// ));
const greeting = users.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, "Your instructors are: ");
let properGreeting = greeting.substring(0, greeting.length -2) + '.';
console.log(properGreeting);

const uniqueLanguages = users.reduce((languages, user) => {

}, '');

console.log(uniqueLanguages);
