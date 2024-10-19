// console.log('Hello World! \n'.repeat(10));
// Arrow Function
// let add = (a, b) => a + b; //  if we have to return just one line we can make the function like this.
// console.log(add(30, 20))
// let multiply = x => x * x; // if we have only one argument in our function and we have to return in one line we can use our function like this.
// console.log(multiply(3))

let obj = {
    name: "Jahirul Islam", // this is a general key value inside an object.
    greet: function(){ // this is a method inside an object which declare a setTimeout function to greet some message. if we call this inside this function we can get the value of name. but if we call this inside the setTimeout function we cann't get this value. in normal function . but there is a way to call this inside the function inside greet method , we can bind this after setTimeout.
        setTimeout(function (){
            console.log(`Hello!, ${this.name}`)
        }.bind(this), 1000) // this inside the bind method is calling main obj from here, that's why we can get the value of name from here.
    }
}
obj.greet()


