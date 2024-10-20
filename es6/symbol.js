// Symbol is a premitive data type whice was developed in es6 to make easy our job.
// symbol creates unique identifier for a property, this data type is 100% unique. lets create Symbol,

let s1 = Symbol("symbol name in variable")
let s2 = Symbol("symbol name in variable")

console.log(s1, s2)
console.log(s1 === s2) // two symbol has it's unique value.



