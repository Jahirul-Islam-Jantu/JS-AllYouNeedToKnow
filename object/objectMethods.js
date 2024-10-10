const obj = {
    name: 'John Smith',
    age: 42,
    email: 'johnSmith@gmail.com',
}
console.log(Object.keys(obj)) // Object.keys methods are used if we need the keys of the objects .
console.log(Object.values(obj)) // Object.values method are used to find the values of an object.
console.log(Object.entries(obj)) // Object.entries method will return the key value pair in a single array in multidimensional way.

const obj2 = Object.assign({}, obj) // Object.assign method is used for cloning an object to another without any change. it will remain the same value if we change any value or key in the new object.
obj2.name = 'JohnSmith'

console.log(obj)
console.log(obj2)