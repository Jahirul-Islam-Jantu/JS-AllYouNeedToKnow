const students = [
    {
        id: "std_1",
        name: "Jahirul Islam",
        age: 32,
        email: "jahirulislam@gmail.com"
    },
    {
        id: "std_2",
        name: "Sahana Islam",
        age: 35,
        email: "sahanaislam@gmail.com"
    },
    {
        id: "std_3",
        name: "Noor - E - Tawhid",
        age: 5,
        email: "nooretawhid@gmail.com"
    },
    {
        id: "std_4",
        name: "Samayrah Islam Zaara",
        age: .2,
        email: "samayrah@gmail.com"
    }
]
//
// const findByValue= students.find(function (value){
//     return value.name === "Sahana Islam"
// })
// console.log(findByValue)
//
// const findByIndex = students.findIndex((value)=>{
//     return value.id === "std_3"
// })
// console.log(findByIndex)

function myFind(students, cb){  // we will get a callback function and the array from parameter
    for (let i = 0; i < students.length; i++){ // we are traversing the array elements
        if (cb(students[i])){ // passing the callback function
            // return students[i] // if we need the student information with specific value we have to return the array with the element.
            return i // if we have to find the index number of specific value we have to return the individual elelment
        }
    }
}
const findByValue = myFind(students, (value)=>{
    return value.id === "std_3"
})
console.log(findByValue)













