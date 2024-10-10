const arr = [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7],
    [7, 8, 9],
]

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
        console.log(`first dimension : ${i} - second dimension : ${arr[i][j]}` );
    }
}