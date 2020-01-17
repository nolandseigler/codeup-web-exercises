const hex = () => {
    const vals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = ['#'];
    let i = 0;
    while (i <= 5) {
        hexColor.push(vals[Math.ceil(Math.random() * (vals.length))]);
        i++;
    }
    hexColor = hexColor.join('');
    return hexColor;
}
document.querySelector('#change').addEventListener('click', () => {
    const crazyColor = () => {
        document.querySelector("body").style.backgroundColor = hex();
    }
    // if (document.querySelector("body").style.backgroundColor === '') {
    //     let crazyColorInterval = setInterval(crazyColor, 1000);
    // } else {
    //     clearInterval(crazyColorInterval);
    //}
    const crazyColorInterval = setInterval(crazyColor, 1000);
    if (document.querySelector("body").style.backgroundColor !== '') {
        clearInterval(crazyColorInterval);
        console.log("Should be clear");
    } else {
        let crazyColorInterval = setInterval(crazyColor, 1000);
        console.log('Not Clear');
    };
});

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

const languagesArr = users.map(function(obj) { return obj['languages']
}).filter(function(languagesArr) {
    return languagesArr.length >= 3;
});

console.log(languagesArr);
