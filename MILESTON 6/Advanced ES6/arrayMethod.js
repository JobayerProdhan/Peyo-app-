const products = [
    {id:1,name:'iphone',color:'black',price:12000},
    {id:2,name:'realme',color:'silver',price:21000},
    {id:3,name:'oppo',color:'purple',price: 39000},
]

products.forEach(product => {
    if(product.color == 'black'){
        console.log(product);
    }
})