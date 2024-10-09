const str = "Hello!, I am Jahirul Islam from JS All you need to know."

let length = 0

while(true){
    if(str.charAt(length) == ""){       // this method is string default Charecter At method. we use it to find if we had a empty string after complete the length of the str variable then it will stop counting. otherwise it will count charecters.
        break;
    }else{
        length ++
    }
}
console.log(length)