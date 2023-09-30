/*	Seeing the World: Think of at least five places in the world you’d 
like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the 
original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its
 original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show 
that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print
 the list to show that its order has changed.
 */
//Solution:
let placesToVisit = ["Murree","Sawat","Tokyo","London","Turkey","Hong Kong","Germany","U.K."];

console.log("Original Array Order:",placesToVisit);

console.log("Alphabetical Order:",[...placesToVisit].sort());

console.log("Original Array Order:",placesToVisit);

console.log("Reverse Alphabetical Order:",[...placesToVisit].sort().reverse());

console.log("Original Array Order:",placesToVisit);

console.log("Reverse Array Order:",placesToVisit.reverse());

console.log("Again Original Array Order:",placesToVisit.reverse());

console.log("Original Alphabetical Array Order:",placesToVisit.sort());

console.log("Original Reverse Alphabetical Array Order:",placesToVisit.reverse());