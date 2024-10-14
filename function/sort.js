const arr = [1,3,5,1,2,5,6,8,7,6,5,8,9,-5,-8,-2,-1,1,2,6,2,6,4,9,1,3,5]
const persons = [
    {
        name: "A",
        age: 25,
    },
    {
        name: "B",
        age: 29,
    },
    {
        name: "C",
        age: 21,
    },
    {
        name: "D",
        age: 15,
    },
]
persons.sort((a, b)=>{ // here we are using default sorting algorithm to sort the person array with descending order by age. sort method gives us 2 parameters a and b . we have to compare the values and return . we can access the age by there default parameter. here a gives us the access of every single objects we found in the array and b gives us the another object access to compare.
    if (a.age > b.age) {
        return -1;
    } else if (a.age < b.age) {
        return 1;
    } else{
        return 0;
    }
})
console.log(persons)

arr.sort((a, b)=>{ // here we use the sorting algorithm to sort the arr of numbers in ascending order.
    if (a >b){
        return 1;
    } else if (a < b){
        return -1;
    } else {
        return 0;
    }
})
console.log(arr)


// every method works if any single element is negative value or odd value then it will return us false
const res1 = arr.every((value)=>{
    return value % 2 == 0
})
console.log(res1)
const res2 = arr.every((value)=>{
    return value < 0
})
console.log(res2)

// some method gives us the access to find if there is a single odd or even number in the array or if there is a single element is negative number then it will return true.

const res3 = arr.some((value)=>{
    return value % 2 == 1
})
console.log(res3)
const res4 = arr.some((value)=>{
    return value < 0
})
console.log(res4)












