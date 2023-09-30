/* Sandwiches: Write a function that accepts a array of items a
 person wants on a sandwich. The function should have one parameter
  that collects as many items as the function call provides, 
  and it should print a summary of the sandwich that is being
   ordered. Call the function three times, using a different 
   number of arguments each time. */
//Solution:
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
      console.log("  You didn't specify any items for your sandwich.");
    } else {
      console.log("  Your sandwich includes:");
      for (const item of items) {
        console.log(`    - ${item}`);
      }
    }
    console.log();
  }
  

  makeSandwich("Turkey", "Swiss", "Lettuce", "Tomato");
  makeSandwich("Ham", "Cheddar");
  makeSandwich();
  