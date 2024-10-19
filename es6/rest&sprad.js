function sum (...rest){ // rest operator helps us to get the parameter like as array and can do anything as we can do with an array. When 3dot is only used into a function parameter it will called rest operator. other anywhere we use 3dot we will call it spared operator.
    return  rest.reduce((a, b) => a + b, 0)
}
console.log(sum(5,3,6,8,51,846));

const obj = {
    a: 10,
    b: 20,
    c: sum = (a , b) => a + b
}
const newObj = {...obj}
console.log(obj)
let res = obj.c(10, 20)
console.log(res)
console.log(newObj)