/* 43.	Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’
names. Because the original array will be unchanged, return the new 
array and store it in a separate array. Call show_magicians() with each 
array to show that you have one array of the original names and one array
 with the Great added to each magician’s name. */
//  Solution:
export{}
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      const greatMagician = `the Great ${magician}`;
      greatMagicians.push(greatMagician);
    }
  
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
   const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn", "Teller"];
  
const originalMagicians = magicianNames.slice();
  

  const greatMagicians = makeGreat(originalMagicians);
  
  console.log("Original Magicians:");
  showMagicians(originalMagicians);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
  