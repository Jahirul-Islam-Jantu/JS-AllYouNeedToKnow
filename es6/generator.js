const arr = [1,2,3]
// for (let v of arr){
//     console.log(v)
// }
// for (let v of "Jahirul Islam"){
//     console.log(v)
// }
const obj = {
    a: 1,
    b: 4,
    [Symbol.iterator]: function*(){ // a function generator we can make when after function keyword we use a star sign, it will be a generator function. it gives us the flexibility to iterate into an object.
        let current = this.a // this.a is the current value to start the iterator.
        while (current <= this.b){ // this.b is the end value of our generator.
            yield current++ // yield method helps us to stop execution after single iteration after start point .
        }
    }
}
const itr = obj[Symbol.iterator]();
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())


function* generate(){
    for(let i = 0; i < arr.length; i++){
        yield arr[i]
    }
}
const iterate = generate(arr)
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

