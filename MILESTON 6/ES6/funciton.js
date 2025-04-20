// function sum(num1=0,num2=0){ // if any want forget to pass argtument of fuction 
//     console.log(num1 + num2);
// }

// sum(10);
// // This is regular funciton 
// function sum (a,b){
//     return a+b;
// }

// let sum 


// // this is Arrow funciton
// const sum2 = (a,b) => {
//     return a+b;
// }

// Different way to declare arrow function 
// 1. Basic:
const great = name => `Hello ${name}`;
console.log(great('jobayer'));


//2. Arrow function with multiple parameter 
const add = (a,b) => a + b ;
console.log(add(5,3));

//3. Arrow function with Block Body(Explicit return)
const multiple = (a,b) =>{
    return a*b;
}

console.log(multiple(6,6));

// Arrow funciton without parameter 
const sayHallo = () =>{
    return 'hello bro!!!'
}
console.log(sayHallo());

const saySalam = () => 'Assalamulaikum Vai !'
console.log(saySalam())

// Arrow function to returning Object Implicity 
const getUser = () => {
    name: 'jobayer';
    age: 25;
}

console.log(getUser())

const number = ''