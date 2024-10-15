let a = 11

function A(){
    let b = 12
    function B(){
        let c = 23
        console.log(c)
    }
    function C(){
        let d = 56
        console.log(d)
    }

    console.log(b)
    D(b)
    B()
    C()
}
function D(n){
    return n + a
}

/*
 *
 *
 */