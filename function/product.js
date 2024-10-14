//
// function uuidv4() {
//     return "xxxxxxxx-xxxx-4xxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
//         const r = (Math.random() * 16) | 0;
//         const v = c == "x" ? r : (r & 0x3) | 0x8;
//         return v.toString(16);
//     });
// }


const product = [
    {
       id: 1,
       productName: "iPhone",
       model: "15 Pro Max" ,
       price: 1500,
    },
    {
        id: 2,
        productName: "Samsung",
        model: "Galaxy S24 ultra",
        price : 1350,
    },
    {
        id: 3,
        productName: "Google",
        model: "Pixel 9 Pro xl",
        price : 1450,
    },{
        id: 4,
        productName: "iPhone",
        model: "14 Pro Max" ,
        price: 1500,
    },
    {
        id: 5,
        productName: "Samsung",
        model: "Galaxy S23 ultra",
        price : 1350,
    },
    {
        id: 6,
        productName: "Google",
        model: "Pixel 8 Pro ",
        price : 1450,
    },{
        id: 7,
        productName: "iPhone",
        model: "13 Pro Max" ,
        price: 1500,
    },
    {
        id: 8,
        productName: "Samsung",
        model: "Galaxy S22 ultra",
        price : 1350,
    },
    {
        id: 9,
        productName: "Google",
        model: "Pixel 7 Pro ",
        price : 1450,
    },
    {
        id: 10,
        productName: "Google",
        model: "Pixel 3 xl ",
        price : 500,
    },
]

// const findByValue = product.find((value)=>{
//     return value.productName === "Samsung"
// })
// console.log(findByValue)



//
// myFilter(product, (value)=>{
//     console.log(value)
// })

// const findByID = myFilter(product, function(value){
//     if (value.id === 5){
//         return true
//     }
// } )


// manual filter method implement
// function myFilter (product, cb){
//     const newProducts = []
//     for(let i = 0; i < product.length; i++){
//         if (cb(product[i], i, product)){
//             newProducts.push(product[i])
//         }
//     }
//     return newProducts
// }
// const findByName = myFilter(product, function(value){
//     if (value.price >= 500 && value.price <= 1350){
//         return value
//     }
// })
// console.log(findByName)

// array built in method
// const filterByValue = product.filter(function(value){
//
//     if(value.id >= 5 && value.id <= 8){
//         let sum = 0
//        for (let i = 0; i <value.price; i++){
//            sum += value.price
//        }
//        return sum
//    }
//
//
// })
// console.log(filterByValue)


const findbyValue = (arr) => {

   let productFilterdPrice = product.filter(function(val){
        let pr = val.productName.toLowerCase().includes(arr.toLowerCase())
        return pr
    })
    let priceTotal= productFilterdPrice.reduce((prev, curr)=> prev + curr.price, 0 )

    return {productFilterdPrice, priceTotal}
};
console.log(findbyValue('samsung'))











