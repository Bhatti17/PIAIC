/* 	More Guests: You just found a bigger dinner table, so now more space is
 available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of 
your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for 
 each person in your list.
 */
// Solution:
export{};
let Guest_list: string []=["Sulman Habib","Zohaib Khan","Abdul Moiz Bhatti"];

let guest = Guest_list[1];

console.log(`${guest} cannot make it to the dinner.`);

Guest_list[1] = "Mateen";
console.log("printing new set of invitation messages.");
Guest_list.forEach(function(value){
  console.log(`Dear ${value}, I would like to invite you to dinner . So, Please come.`)
});

console.log("We found a bigger dinner table.");

Guest_list.unshift("Bilal");
Guest_list.splice((Guest_list.length/2),0,"Husnain");
Guest_list.push("Qandeel");

console.log(`Update invitation for Dinner.`);

Guest_list.forEach(function(value){
    console.log(`Dear, ${value}, I would like to invite you to dinner. So, Please Come.`)
});