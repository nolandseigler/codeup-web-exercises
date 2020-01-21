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

// wait(1000).then(() => console.log(`You'll see this after 1 second`));

function getGithubUserData(username) {
    return fetch(`https://api.github.com/search/repositories?q=user:${username}&&sort=updated`, {headers: {"Authorization": `${githubKey}`}})
        .then(response => response.json())
        .then(response => response['items'][0]['full_name'])
        .then(response => {
            return fetch(`https://api.github.com/repos/${response}/commits`, {headers: {"Authorization": `${githubKey}`}})
        })
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                if (response[i]['committer']['login'] === username){
                    console.log(response[i]['sha'])
                    return (response[i]['sha']);
                }
            }
        })
};

getGithubUserData('nolandseigler');