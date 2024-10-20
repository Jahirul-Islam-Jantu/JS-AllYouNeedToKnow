const obj = {
    a: 10,
    b: 20
}

console.log(Object.entries(obj)) // Object.entries method is used to create array from an object. it will create multiple array if there is multiple key value pair inside the object. and the total object will be wrapped in another parent array.

const arr = [
    ["a", 10],
    ["b", 20]
]

console.log(Object.fromEntries(arr)) // this fromEntries method will convert this multiple lined array into a pure object.