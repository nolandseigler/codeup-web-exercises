import {gitHubKey} from "./keys.js";

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

const