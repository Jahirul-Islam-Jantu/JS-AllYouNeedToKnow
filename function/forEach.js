const arr= [1,2,3,4,5,6];

// let sum=0;
// arr.forEach(function(value, index, arr) {  // forEach method will provide us value, index of the value and original array everytimes we implement. we can use value index or array as per as our need.
//     sum += value
//     console.log(value, index, arr);
//     return sum
// })
// console.log(sum)

function forEach(arr, cb){  // we are traversing in an array by creating our own function named forEach and we are also taking a callback function to implement the array.
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);  // passing the callback function as a parameter for the next process.
    }
}
let sum = 0; // this is to make summetion of the value.
forEach(arr, function(value, index, arr){  // we are making our own forEach function from the traversing function with the callback function here. in this higher order function we are taking value, index and original array in parameter and we can do what we need to do with this callback function.
    console.log(value, index, arr);
    return  sum += value
})
    console.log(sum)
