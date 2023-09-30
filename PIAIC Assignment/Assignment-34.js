"use strict";
/* Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the
  name of each animal. • Modify your program to print a statement about each animal,
   such as A dog would make a great pet. • Add a line at the end of your program
   stating what these animals have in common. You could print a sentence such as
    Any of these animals would make a great pet! */
//Solution:
let Animal = ["Cat", "Dog", "Rabbit"];
for (let i = 0; i < Animal.length; i++) {
    console.log(Animal[i]);
}
for (let i = 0; i < Animal.length; i++) {
    const Animals = Animal[i];
    console.log(`A ${Animals} would make a great pet`);
}
console.log(`Any of these animals would make a great pet!`);
