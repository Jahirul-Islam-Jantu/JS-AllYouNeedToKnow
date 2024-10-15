function base(b){ // this is a higher level function that multiplies the inner function with base.
    return (n)=>{ // this inner function will powered by the base value and store how many times base has given the number, it will store a result and by default we cann't use the value of storage to 0. inner value will itterate with inner value into the base time.
        let result = 1
        for (let i = 0; i <= b; i++) {
            result *= n
        }
        return result;
    }
}
const basePower = base(10)
console.log(basePower(5))