"use strict";
/*Great Magicians: Start with a copy of your program
from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the
 phrase the Great to each magician’s name. Call show_magicians()
  to see that the list has actually been modified. */
//   Solution:
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = `the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["David Copperfield", "Houdini", "Penn", "Teller"];
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
