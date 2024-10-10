let arr = [1, 2, 3, 4, 5, 6, 7, 8, ];


for (let i = 0; i < (arr.length / 2); i++) { // we take half array length to traverse, if we take the full length it will remain same after traversing.
    let temp = arr[i] // temporary variable for array index to collect array numbers
    arr[i] = arr[arr.length - 1 - i]    // we set individual elements on arr[i] that means on temp variable from the array . we took the last number to the first and everytime it traverse in the array.
    arr[arr.length - 1 -i] = temp // we set the arrays last element to the array element serially.
}
console.log(arr)


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
console.log(arr1.reverse())