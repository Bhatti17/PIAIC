"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const originalMagicians = magicianNames.slice();
const greatMagicians = makeGreat(originalMagicians);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
