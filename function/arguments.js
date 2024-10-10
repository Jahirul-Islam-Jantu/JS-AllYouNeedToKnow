function test(a, b, c) {
    // console.log(arguments)          // arguments is a default parameter in javascript, it's an array like data structure which can be used like array and object also. when we pass the value in the function it will return like object with indexing like array. it can be travarse also.
    for (let i=0; i< arguments.length; i++) {
        console.log(arguments[i]);
    }

}
// test();
// test(10, 20, 30)

function test2() {
    let sum = 0
    for (let i = 0; i<arguments.length; i++) { // when we don't know actually the input of the function but we need to sum all the values, we can use arguments object to do this work. it will take all the values as parameter.
        sum += arguments[i]
    }
    console.log(sum)
}
test2(1,5,3,6,9,8,658)