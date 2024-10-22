let set = new Set(["Jahirul Islam", "Jantu", 1,2,3])

set.add(4)
set.add(5)
let ifhas =  set.has(5)
console.log(ifhas)
let ifthere = set.has(6)
console.log(ifthere)
let hasthis = set.has("Jahirul Islam")
console.log(hasthis)

console.log(set)
set.delete(5)
console.log(set)

let iterate = set.keys() // this set data Structure has its own iterator . can be iterete by Set default method like set.keys, set.values, set.entries
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())


