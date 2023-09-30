"use strict";
/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an
if-else chain.
• If the alien’s color is green, print a statement that the player
 just earned 5 pointsfor shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just
 earned 10 points.
• Write one version of this program that runs the if block and another that
 runs the else block.
 */
// Solution:
// Scenario 1:
let alien_color_pass = "Yellow";
let alien_color_Fail = "Red";
let alien_color_Position = "Green";
if (alien_color_pass === "Yellow") {
    console.log(`${alien_color_pass} Congratulation! You Just earned 5 points.`);
}
else {
    console.log(`${alien_color_Position} Congratulation! you WIN 10 Points.`);
}
if (alien_color_Position === "Green") {
    console.log(`${alien_color_Position} Congratulation! You WIN 10 Points.`);
}
else {
    console.log(`${alien_color_pass} Congratulation! You WIN 5 POints.`);
}
if (alien_color_Fail === "Red") {
    console.log(`${alien_color_Fail} Sorry! You will Try again.`);
}
else {
    console.log(`Tata byby`);
}
