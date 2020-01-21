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
    return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`, {
        headers: {
            'Authorization': githubKey,
            'Accept': 'application/vnd.github.cloak-preview'
        }
    })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let commit = res['items'][0]['commit'];
            let repo = res['items'][0]['repository']
            let commitInfo = {
                sha: res['items'][0]['sha'],
                url: commit['url'],
                committer: commit['committer']['name'],
                date: commit['committer']['date'],
                message: commit['message'],
                repository: repo['name'],
                repositoryOwner: repo['owner']['login']
            };
            return commitInfo;
        })
};

console.log(getGithubUserData('nolandseigler'));

// function getGithubUserDataWithEvents (username) {
//     return fetch (`https://api.github.com/users/${username}/events`, {
//         headers: {
//             'Authorization': githubKey
//         }
//     })
//         .then(response => response.json())
//         .then(res => res.find(element => element['type'] === 'PushEvent'))
//         .then(data => {
//             let commit = data['payload']['commits'][0];
//             let eventInfo = {
//                 sha: commit['sha'],
//                 url: commit['url'],
//                 committer: commit['author']['name'],
//                 date: data['created_at'],
//                 message: commit['message'],
//                 repository: data['repo']['name'],
//                 repositoryOwner: `Could not find this using this endpoint(events)`
//             }
//             return eventInfo;
//         })
// }
// console.log(getGithubUserDataWithEvents('nolandseigler'));