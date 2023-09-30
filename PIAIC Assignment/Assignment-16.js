"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_list = ["Sulman Habib", "Zohaib Khan", "Abdul Moiz Bhatti"];
let guest = Guest_list[1];
console.log(`${guest} cannot make it to the dinner.`);
Guest_list[1] = "Mateen";
console.log("printing new set of invitation messages.");
Guest_list.forEach(function (value) {
    console.log(`Dear ${value}, I would like to invite you to dinner . So, Please come.`);
});
console.log("We found a bigger dinner table.");
Guest_list.unshift("Bilal");
Guest_list.splice((Guest_list.length / 2), 0, "Husnain");
Guest_list.push("Qandeel");
console.log(`Update invitation for Dinner.`);
Guest_list.forEach(function (value) {
    console.log(`Dear, ${value}, I would like to invite you to dinner. So, Please Come.`);
});
console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner.\nWe can only invite two people for dinner.\n");
let removeGuest;
for (let i = Guest_list.length; i > 2; i--) {
    removeGuest = Guest_list.pop();
    console.log(`Sorry,${removeGuest},I am unable to invite you.`);
}
console.log("\nInvitation messages for remaining guests:\n");
Guest_list.forEach(function (value) {
    console.log(`Dear ${value},I would like to invite you to dinner.So,please come.`);
});
Guest_list = [];
console.log("\nCurrent guest list:", Guest_list);
