class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("Ami cholachol korte pari");
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat  = seat ;
    }
    route(){
        console.log("Dhaka to Rangpur")
    }
}

const SR_Travels = new Bus("SR Travels",1200000000,50);
console.log(SR_Travels);

// Here prototype of SR Travels is Vehical;

SR_Travels.move()





class Truck  extends Vehicle{
    constructor(name,price,load){
        super(name,price)
        this.load = load;
    };
}