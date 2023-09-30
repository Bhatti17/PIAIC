"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Saad", "Sulaman", "Khaqan", "Bilal"];
if (usernames.length === 0) {
    console.log(`We need to some users.`);
}
else {
    for (let user of usernames) {
        console.log(`Hello! ${user}`);
    }
    usernames.length = 0;
    console.log(`All Users have been removed.`);
}
