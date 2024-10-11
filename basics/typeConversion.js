const str = "1000"
const num = 100

console.log(str + num)
console.log(str - num)
console.log(str * num)
console.log(str / num)
console.log(str % num)

let strToNum = (str) => {
    let num2 = Number(parseInt(str))
    return num2
}
console.log(strToNum("100") * num)

const numToString = (num)=>{
    let string = num.toString();
    return string
}
console.log(strToNum("1000") * numToString(1000))

 let sum = strToNum("100") + numToString(100) /* this will concate string and number*/
 let sub = strToNum("100") - numToString(100) /* this will automatically convert string to numbers */
 let mul = strToNum("100") * numToString(100) /* this will automatically convert string to numbers */
 let div = strToNum("100") / numToString(100)/* this will automatically convert string to numbers */
 let mod = strToNum("1001") % numToString(100)/* this will automatically convert string to numbers */

console.log(`
    if you sum over String and Numbers, you always get the concate value of this two. example:
    sum (strToNum("100") + numToString(100)) = ${sum} value. 
    if you sub/multiply/divide/modulus between two string and number values, the string value will automatically change into number value. it this will show the exact result among them.
    example:
    sub (strToNum("100") - numToString(100)) = ${sub} value.
    multiply (strToNum("100") * numToString(100)) = ${mul} value.
    div (strToNum("100") / numToString(100)) = ${div} value.
    module (strToNum("1001") % numToString(100)) = ${mod} value.
    
`)

//falsy values in javascript
/*
    ""
    undefined
    NaN
    0
    null

 */

/**
 * Constructor for implicit
 *
 * to convert into string  - String()
 * to convert into number - Number()
 * to convert into boolean - Boolean()
 */

