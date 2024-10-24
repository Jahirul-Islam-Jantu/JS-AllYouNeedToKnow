// recursive function is such kind of function who calls himself until the condition meets. to break or terminate the call we need to set condition inside the function. otherwise it will run infinity time.
// function sayHi (n){ // we make a function and set its paremeter to get the value to itterate the function into times.
//     if (n === 0) // here we sets the condition that the n times itteration will count until it gets the 0 count.
//         return ; // we can return something or can only return , this statement is used to terminate the function call.
//     console.log("Hi, I am Calling") // it will print n times.
//     sayHi(n -1) // this is the repetative function call we set and its value will minus after each itteration by 1.
// }
// sayHi(5) // this call and arguments will itterate the function 5 times because we set the value 5.

// function sum (n){
//     if (n === 1){ // this condition is the break point of this function , it will terminate when the value of n gets 1.
//         return 1;
//     }
//     return n + sum(n-1) // this n gets the value from outside of this function and this time it get it's value 10. we can see n + the repetative function call here. that means this function will call 10 time and after every itteration its  value decrease by 1. that means the value of n we got first time is 10 after first call, it will call the function again with the value stored in n, then the n value will call again with decreased number because we call the sum function on the return statement again by decreasing the value . it will repet until the condition n === 1 meets.
// }
//
// console.log(sum(10))
//
// function factorialNumber (n){
//     if (n === 1)
//         return 1;
//     return  n * factorialNumber(n-1)
// }
// console.log(factorialNumber(10))


// const array = [1,2,3,4,5,6,7,8,9]
//
// function addNumbers (array, lastIndex){
//     if (lastIndex < 0){
//         return 0
//     }
//     return array[lastIndex]+ addNumbers(array, lastIndex -1)
// }
// console.log(addNumbers(array, array.length - 1))

const factorialNumber = (n)=>{
    if(n <= 1){
        return 1
    }
    return n * factorialNumber(n-1)
}
console.log(factorialNumber(4))