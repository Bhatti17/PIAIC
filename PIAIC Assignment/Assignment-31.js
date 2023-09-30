"use strict";
/* Checking Usernames: Do the following to create a program that simulates how
 websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of
 the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username. If a
 username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN'
 should not be accepted.
 */
// Solution:
let current_users = ["Ali", "Bilal", "Ahmed", "Zeeshan", "Zaid"];
let new_users = ["ali", "bilal", "ahmed", "zeeshan", "zaid"];
function AvailableUsaer(username) {
    let lowerCaseUserName = username.toLowerCase();
    return !current_users.map((user) => user.toLowerCase()).includes(lowerCaseUserName);
}
for (let user of new_users) {
    if (AvailableUsaer(user)) {
        console.log(`The  username '${user}' is Available.`);
    }
    else {
        console.log(`Soory, the username ${user} is already taken. Please choose a different usernamre.  `);
    }
}
