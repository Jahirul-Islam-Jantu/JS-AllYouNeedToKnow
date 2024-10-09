while(true){
    let rand = Math.floor(Math.random() * 10 +1)
    if(rand === 5){
        console.log( rand, " Horray! You got the Winner Prize.")
        break;
    } else{
        console.log( "You got the number ", rand)
    }
}