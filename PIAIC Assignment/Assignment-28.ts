/* Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in
 your array. If the fruit is in your array, the if block should print a statement,
  such as You really like bananas!
 */
//  Solution;
export{}
let fruit = ["Banana", "Apple" , "Mango"];

if (fruit.includes("Banana")) {
    console.log(`You really like banana.`)
}
if (fruit.includes("Apple")) {
    console.log(`Apple are a favorite.`)
}
if (fruit.includes("strawberry")) {
    console.log(`Strawberry are not in your top three.`)
}
if(fruit.includes("Mango")) {
    console.log(`Mango are one of your favorite!`)
}
if (fruit.includes("kiwi")) {
    console.log(`Kiwi is not on your list.`)
}