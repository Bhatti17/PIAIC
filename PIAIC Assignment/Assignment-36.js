"use strict";
/*Large Shirts: Modify the make_shirt() function so that
 shirts are large by default with a message that reads I
  love TypeScript. Make a large shirt and a medium shirt
   with the default message, and a shirt of any size with a different message. */
function make_shirt(size = "large", message = "I love Pakistan") {
    return { size, message };
}
let largeshirt = make_shirt();
console.log(`large shirt: size - ${largeshirt.size}, Message - ${largeshirt.message}`);
let mediumShirt = make_shirt("medium");
console.log(`Medium Shirt : size- ${mediumShirt.size} , Message : ${mediumShirt.message}`);
let smallShirt = make_shirt(`Samll,  I love Also Lahore`);
console.log(`Samll Shirt: Size ${smallShirt.size} , Message : ${smallShirt.message}`);
