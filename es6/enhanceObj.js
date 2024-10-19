let a = 10, b = 20;
let obj = {
    a,
    b,
    print() {
        console.log(a, b)
        a += 20
        b += 30
        return console.log(a + b)
    }
}
obj.print()