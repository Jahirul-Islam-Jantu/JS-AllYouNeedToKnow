// let obj = {
//     start: 1,
//     end: 50,
//     [Symbol.iterator]: function () {
//         let currentValue = this.start
//         const self = this
//         return {
//             next(){
//                 return {
//                     done: currentValue > self.end,
//                     value: currentValue++
//                 }
//             }
//         }
//     }
// }
//
// for (let val of obj) {
//     setTimeout(()=>{
//         console.log(val)
//     }, 1000)
// }
//
// const arr = [1,2,3,4,5,6]
//
// function customIterate (collection){ // this is the blueprint of an es6 custom iterator, which will iterate until the value of i is done false and in a single call it will stop iterate single time then stops execution.this custom iterator will help us to execute the value when we need .
//     let i = 0 // this is the initial value
//     return { // iterator function returns an object
//         next() { // after return we will get a next function and inside next we have to return two parameters.
//             return {
//                 done: i >= collection.length, // done parameter will iterate until the collection of an array count
//                 value: collection[i++] // value will iterate times ++
//
//             }
//         }
//     }
// }
//
// const iterate = customIterate(arr)
// console.log(iterate.next()) // we have to call the next function to execute the iteration count each time, until it get it's final value it will return false and execute the number. after every call we will get the next number.
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// recursive function to find factorial number

const findFactorial = (n) => {
  if (n < 1) {
    return 1;
  }
  return n * findFactorial(n - 1);
};
console.log(findFactorial(4));



const arr = [10,20,30,40,50]

function customIterate (collection){ // this is the blueprint of an es6 custom iterator, which will iterate until the value of i is done false and in a single call it will stop iterate single time then stops execution.this custom iterator will help us to execute the value when we need .
  let i = 0 // this is the initial value
  return { // iterator function returns an object
    next() { // after return we will get a next function and inside next we have to return two parameters.
      return {
        done: i >= collection.length, // done parameter will iterate until the collection of an array count
        value: collection[i++] // value will iterate times ++

      }
    }
  }
}

const iterate = customIterate(arr)
console.log(iterate.next()) // we have to call the next function to execute the iteration count each time, until it get it's final value it will return false and execute the number. after every call we will get the next number.
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())