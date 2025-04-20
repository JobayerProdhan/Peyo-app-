/**
 * NULL ---> Empty value 
 * Undefined ----> Not exits , Can't defined
 * 
 */

const name = 'gias'
console.log(typeof name) // string 

let name1;
console.log(name1) // name1 is undefined 

let name2 = '';
console.log(name2)

let name3 = null;
console.log(typeof null);// return object !! funny things this is bug of js 


// Different case when undefined created 

// case 1 
// console.log(namess);console.log(namess)
//case 2 
let nme; console.log(nme)
// case 3 
let name4 = undefined;
console.log(name4)


//case 4
function sum(num1,num2){
    console.log(num1,num2);
}

sum() // we didn't gave undefined 
sum(10)
const result = sum(10,20);
console.log(result); // this is give undefined  

function sum(num1,num2){
    return;
}
console.log(result); // undefined Becasue sum function can't return anythings 

