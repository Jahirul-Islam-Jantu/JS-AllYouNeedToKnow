const arr = [1,35,561,154,43,21,76,94,413,78]

// const newArr =  arr.filter((value, index, arr)=>{
//     return value < 400
// })
// console.log(arr)
// console.log(newArr)

function myFilter(arr, cb) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(arr)
const positiveNum = myFilter(arr, (value)=>{
    return value % 2 == 0
})

console.log(positiveNum)


const bigNum = myFilter(arr, (value)=>{
    return value < 300
})
console.log(bigNum)










