// First Class Function

function add (a, b){
    return a+ b
}

// A function can be stored in a variable

    let sum = add
console.log(sum(5,6))

// A function can be stored in an array
    let arr = []
    arr.push(add)
console.log(arr)
console.log(arr[0](5,6))


// a function can be stored in an object
let obj = {
    sum: add
}
console.log(obj.sum(6,5))

// We can create function as need
setTimeout(function (){
    add(6,5)
}, 3000)

// We can pass function as an arguments
// we can return function from another function

