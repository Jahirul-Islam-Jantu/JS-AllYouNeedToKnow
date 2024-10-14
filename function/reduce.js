const arr = [1,2,3,4,5,6,7,8,9]

// const newArr =  arr.reduce((previousValue, currentValue)=>{
//     return previousValue + currentValue
// }, 300)
// console.log(newArr)

// const maxVal = arr.reduce((previousValue, currentValue)=>{
//     return Math.max(previousValue, currentValue)
// }, 0)
// console.log(maxVal)
// const minValue = arr.reduce((acc, cur)=> {
//     return Math.min (acc, cur)
// })
// console.log(minValue)


function myReduce (arr, cb , acc){
    for (let i = 0; i < arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}

const max = myReduce(arr, function (prev, cur){
    return Math.max(prev, cur)
}, 0)
console.log(max)

const min = myReduce(arr ,(prev, cur)=>{
    return Math.min(prev, cur)
}, arr[0])
console.log(min)
const sum = myReduce(arr , (prev, curr)=> {
    return prev + curr
}, 0)
console.log(sum)










