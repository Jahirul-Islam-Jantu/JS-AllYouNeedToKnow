let obj = {
    start: 1,
    end: 50,
    [Symbol.iterator]: function () {
        let currentValue = this.start
        const self = this
        return {
            next(){
                return {
                    done: currentValue > self.end,
                    value: currentValue++
                }
            }
        }
    }
}

for (let val of obj) {
    setTimeout(()=>{
        console.log(val)
    }, 1000)
}