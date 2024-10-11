function greetings (greet, name){           // this is the main function to take the arguments for greetings . we have inner fn also to do the next process.
    function getFirstName (){          // this fn is used for name split with the first sentence seperated by comma.
        if (name){
            return name.split(" ")[0]
        }else {
            return ""
        }
    }
    const greetMessages = greet + " " + getFirstName()
    console.log(greetMessages)
}
greetings("Good Morning", "Jahirul Islam")

console.log("Hello World!")