let name = ""; // in this variable we have empty string , it is actually a falsy value. if we use this value in a condition it will be false and return the second value. it is called short circuit evaluation. it is a short way to write the code. it is also called logical OR operator. if we wrote any value in the empty string it will be true and return the first value.

let fullName = name || "Jahirul Islam"; // here fullName variable will is calling the variable name which is empty string and it is a falsy value so it will return the second value. if we wrote any value in the empty string it will be true and return the first value.
console.log(fullName);

let isActive = true;
let user = isActive && "Jahirul Islam"; // here user variable will is calling the variable isActive which is true and it is a truthy value so it will return the first value. if we wrote any falsy value in the true value it will be false and return the second value.
console.log(user);
