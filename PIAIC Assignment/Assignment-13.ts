/* 14.	Guest List: If you could invite anyone,
 living or deceased, to dinner, who would you
 invite? Make a list that includes at least three
people you’d like to invite to dinner. Then use
your list to print a message to each person,
inviting them to dinner. */
// Solution
export{}
 let Guest_list: string []=["Sulman Habib","Zohaib Khan","Abdul Moiz Bhatti"];
console.log(Guest_list)
Guest_list.forEach((e)=>{
    console.log(`Hello, ${e}!  You are inviting them to dinner.`)
})

