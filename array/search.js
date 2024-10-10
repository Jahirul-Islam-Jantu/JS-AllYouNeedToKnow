const arr = [13, 64, 65 ,62, 1, 35, 24, 15, 33,156]

let isFound = false // this boolean value is created to check if the condition is checked and found or not. if not then it will check the second condition.
let find = 33 // this variable is use to search the number.

for (let i = 0; i < arr.length; i++) {
    if( arr[i] === find){ // here we use a comparison operator to search data, arr[i] is for the array index and === to compare with the find number variable.
        console.log(arr[i]," is found at index number: ", i)
        isFound = true // if we find the number then the boolean value is turned true and console the data
        break
    }
}
if(!isFound ){      // if not isFound then it will return that we didn't get any number in this array.
    console.log("dosen't exist")
}