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
