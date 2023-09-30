"use strict";
/* 	Intentional Error: If you haven’t received an array index
error in one of your programs yet, try to make one happen. Change
an index in one of your programs to produce an index error. Make
sure you correct the error before closing the program. */
// Solution:
let num = [1, 2, 3, 4, 5];
let num1 = num[5];
if (num.length > 5) {
    let num1 = num[5];
    console.log(`Value at Num1: ${num1}`);
}
else {
    console.log(`God Bless You and Long Life.`);
}
