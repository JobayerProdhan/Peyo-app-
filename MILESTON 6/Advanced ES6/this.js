class Person{
    constructor(name,age){
        this.name = name; 
        this.age = age;
    }
}
const Solimuddin = new Person("solim",30);
console.log(Solimuddin)

function sum(){
     console.log(this);
}

sum()