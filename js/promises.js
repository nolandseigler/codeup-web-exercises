import { githubKey } from './keys.js';
const wait = function (time) {
    return new Promise((resolve,  reject) => {
        if (typeof time === 'number') {
            setTimeout(() => {
                resolve();
            }, time);
        }
        else {
            reject();
        }
    });
}

wait(1000).then(() => console.log(`You'll see this after 1 second`));

console.log(githubKey);

function getGithubUsernames() {
    return fetch('https://api.github.com/users', {headers: {"Authorization": `${githubKey}`}})
        .then(response => response.json())
        .then(users => users.map(user => user.login));
}

// later on...

getGithubUsernames().then((usernames) => {
    usernames.forEach((username) => {
        console.log(username)
    });
}).catch(error => console.error(error));