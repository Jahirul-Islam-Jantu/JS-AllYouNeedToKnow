for (; ;){
    let rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 7){
        console.log(rand, " Yahoo!! You got the winner number.")
        break
    }else {
        console.log("You got the number ", rand)
    }

}