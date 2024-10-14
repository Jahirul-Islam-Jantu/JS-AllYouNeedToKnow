// let arr = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//
//
// //     const newArr = arr.map((value)=>{ // Map function will return a new array that's why we stored it in a variable. on the other hand forEach changes the original array.
// //         return value*value;
// //     })
// //
// // console.log(arr)
// // console.log(newArr)
//
// // function map(arr) {
// // let newArray = [] // this is a new empty array we declared because we need a array to store the new value in a new array.
// //     for (let i = 0; i < arr.length; i++) { // we need to travers array for our map function to work
// //         let temp = arr[i] * arr[i]; // we are taking a variable to set array elements on it after traverse.
// //         newArray.push(temp);  // in the new array we push our array elements with new value
// //     }
// //     return newArray;
// // }
// //
// // console.log(arr)
// // console.log(map(arr));


// function map (arr, cb){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         const temp = cb(arr[i], i, arr);
//         newArr.push(temp);
//     }
//     return newArr
// }
//
// const square = map(arr, function(value, index, arr){
//     return value ** value
// })
// console.log("square the value", square)
// const mulTen = map(arr, function(value, index, arr){
//     return value * 10
// })
// console.log(" Multiply with 10 ", mulTen)
//
// const showAllSeperated = map(arr, function(value) {
//     if (value % 2 === 0) {
//         return `value = ${value}`
//     }else {
//         return `value = ${value}`
//     }
// })
//     console.log(showAllSeperated)



const arr = [1,2,3,4,5]

console.log(arr.indexOf(3))
console.log(arr.findIndex((arr)=>{
    return arr > 3
}))






// const newArr =  arr.map((value, index, array)=>{
//     return value + 5
// })
// console.log(`Old Arr: ${arr}`)
// console.log(`New Arr: ${newArr}`)










// const newArr = arr.map((value, index, arr)=>{
//     const num = Math.floor(Math.random() *50 +1)
//     return num, console.log(value, index, arr)
// })
// console.log(arr)
// console.log(newArr)


// function myMap (arr){
// const newArr = []
//     for (let i = 0; i < arr.length; i++){
//         const temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }
//     return newArr
//
//
// }

// console.log(arr)
// console.log(myMap(arr))

// const sqr = myMap(arr, (value)=>{
//     return value ** value
// })
// console.log(sqr)
//
// const add = myMap(arr,(value)=>{
//     return value + value
// })
// console.log(add)
// const sub = myMap(arr,(value)=>{
//     return value - value
// })
// console.log(sub)
// const mul = myMap(arr,(value)=>{
//     return value * value
// })
// console.log(mul)
// const intoTen = myMap(arr,(value)=>{
//     return value * 10
// })
// console.log(intoTen)
























