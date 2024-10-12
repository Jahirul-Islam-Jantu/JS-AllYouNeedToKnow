// it returns the same value if given the same arguments.
// it does not cause any observable side effects.

function pureFunction(a, b) {
    return a + b
}

console.log(pureFunction(1, 2 ))
console.log(pureFunction(1, 2 ))
console.log(pureFunction(1, 2 ))

// this is the example of a pure function . it will never return any other result in this arguments. if any function changes value of global variable , it is not a pure function .