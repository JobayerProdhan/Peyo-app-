class Product{
    malik = 'Jobayer Prodhan';
    

    // This is constructor fuction: 
    // 
    constructor(name,price,brand,malik){
        this.name = name ;
        this.price  = price;
        this.brandName = brand;
        this.malik = malik;
    }
    
    details(){
        console.log(`ami ${this.name} product er details`);
    }
}


const iPhone = new Product("Realme 8","21000","Realme","jobs");
console.log(iPhone);
iPhone.details();

const fahadPhone = new Product("Oppo f11 pro",39000,"Oppo","Fahad Er bou");
console.log(fahadPhone);
fahadPhone.details()