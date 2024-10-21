const arr = [30, 20, 45, 12, 65];

const iterate = arr[Symbol.iterator](); // this is just a simple iterator function from es6, we can use this iterator and can execute its value as we need by calling next method on it.
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
