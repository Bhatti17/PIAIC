"use strict";
/* Magicians: Make a array of magician’s names. Pass the array
 to a function called show_magicians(), which prints the name
 of each magician in the array. */
//  Solution:
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
;
const magicianName = ["David Copperfield", "Houdini", "Penn", "Teller"];
show_magicians(magicianName);
