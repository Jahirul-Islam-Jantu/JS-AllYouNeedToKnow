const arr=[1,2,3,4,5,6];

console.log(arr.join(" | "))  // join method is used for seperate array with anything you provide.
console.log(arr.fill("Hello")) // fill method will fill the array with anything you want .

let a = [1,2,3,4,5,6];
let b = Array.from(a); // to copy an array from another array without hampering main data

 b[0] = 55

console.log(b);
console.log(a);