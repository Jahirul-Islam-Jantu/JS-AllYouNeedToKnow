function test (a, b, cb){  // we can take a function as an argument
    let c = a + b
    let d = a-b
    let result = cb(c, d) // this function will do what user actually wants to do
    return result
}

const result = test(5, 2, function (a,b){ // in higher order function we learn about we can create a function anywhere we need.
    return a + b
})
console.log(result)
const result2 = test(5, 2, function (a,b){  // this function will pass the value to cb function as an argument.
    return a - b
})
console.log(result2)
const result3 = test(5, 2, function (a,b){
    return a * b
})
console.log(result3)
const result4 = test(5, 2, function (a,b){
    return a/b
})
console.log(result4)
const result5 = test(5,2, function (a,b){
    return a % b
})
console.log(result5)



