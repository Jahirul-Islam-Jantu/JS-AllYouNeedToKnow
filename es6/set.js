// let set = new Set(["Jahirul Islam", "Jantu", 1,2,3])
//
// set.add(4)
// set.add(5)
// let ifhas =  set.has(5)
// console.log(ifhas)
// let ifthere = set.has(6)
// console.log(ifthere)
// let hasthis = set.has("Jahirul Islam")
// console.log(hasthis)
//
// console.log(set)
// set.delete(5)
// console.log(set)
//
// let iterate = set.keys() // this set data Structure has its own iterator . can be iterete by Set default method like set.keys, set.values, set.entries
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// const arr = [1,2,3,4,5,6]
// const obj = {
//     a: 1,
//     b: 5,
//     [Symbol.iterator]: function (){
//         let current = this.a;
//         let self = this
//         return {
//             next() {
//                 return{
//                     done: current >= self.b,
//                     value: current++
//                 }
//             }
//         }
//     }
// }


// const isIterable = (i)=>{
//     return typeof i[Symbol.iterator] === 'function'
// }
//
//
// console.log(isIterable(obj))



//
// const iterate = obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

//
// const arr = [1,2,3,4,5,6,7,8,9]
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] === 5){
//         break
//     }
//         console.log(arr[i])
// }





// console.log(isIterable(arr))


// console.log(isIterable(set))

let str = "Hello"

function reverseTheStr (str){
    return  str.split("").reverse().join("");

}
console.log(reverseTheStr(str));




















