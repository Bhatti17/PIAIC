"use strict";
/* 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False
 result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
 than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Solution:
// Testing for equality and in equality with string 
let str = "Hello";
let str1 = "World";
let str2 = str === str1; // False
let str3 = str != str1; //True
//  Tests using the lower case function
let lCstr = "AbDuLMoIz";
let lCstr1 = lCstr.toLowerCase() === "abdulmoiz"; //true
let num1 = 10;
let num2 = 20;
let isEqualNum = num1 === num2; //False
let isNotNum = num1 != num2; //True
let isGreaterNum = num1 > num2; // False
let isLessNum = num1 < num2; // True
let isEq_Lessnum = num1 >= num2; // False
let isEq_Greaternum = num1 <= num2; // Ture
//   Tests using "and" and "or" operators
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let andOprator = a < b && b > a; //Ture
let oRoperator = c >= d || d <= c; //False
let notOperator = a < d != c > b; // False
// Test whether an item is in a array
let whether = ["Abdul Moiz", "Mateen", "Zohaib", "H.Shakeel"];
let findItem = "Mateen";
if (whether.some((item) => item === findItem)) {
    console.log(`${findItem} is a wheather`);
}
else {
    console.log(`Is not Wheater.`);
}
;
// Test whether an item is not in a array
let findItem2 = "Sulman";
if (whether.some((item) => item === findItem2)) {
    console.log(`${findItem2} is a include in Wheather.`);
}
else {
    console.log(`findItem2 is not include in Wheather.`);
}
;
console.log("🚀 ~ file: Assignment-23.ts:47 ~ notOperator:", notOperator);
console.log("🚀 ~ file: Assignment-23.ts:46 ~ oRoperator:", oRoperator);
console.log("🚀 ~ file: Assignment-23.ts:45 ~ andOprator:", andOprator);
console.log("🚀 ~ file: Assignment-23.ts:38 ~ isEq_Greaternum:", isEq_Greaternum);
console.log("🚀 ~ file: Assignment-23.ts:37 ~ isEq_Lessnum:", isEq_Lessnum);
console.log("🚀 ~ file: Assignment-23.ts:36 ~ isLessNum:", isLessNum);
console.log("🚀 ~ file: Assignment-23.ts:35 ~ isGreaterNum:", isGreaterNum);
console.log("🚀 ~ file: Assignment-23.ts:34 ~ isNotNum:", isNotNum);
console.log("🚀 ~ file: Assignment-23.ts:33 ~ isEqualNum:", isEqualNum);
console.log("🚀 ~ file: Assignment-23.ts:26 ~ lCstr1:", lCstr1);
console.log("🚀 ~ file: Assignment-23.ts:20 ~ str2:", str2);
console.log("🚀 ~ file: Assignment-23.ts:22 ~ str3:", str3);
