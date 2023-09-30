//3.Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase,
//uppercase, and titlecase.

//Solution:
var nameCases = "My Name is Abdul Moiz";
console.log(`LowerCase:${nameCases.toLowerCase()}`);
console.log(`UpperCase:${nameCases.toUpperCase()}`);

function titleCase(abc:string){
    let str;
    str = abc.toLowerCase().split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str. join(" ");
}

console.log(`titlecase:${titleCase("My Name is Abdul Moiz")}`);
