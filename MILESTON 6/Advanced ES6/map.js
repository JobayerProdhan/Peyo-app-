const numbers = [1,2,3,4,5];

let sum = 0;
let temp = [];
for(let i = 0 ;i<numbers.length;i++){
    sum = numbers[i] + 1 ;
    temp.push(sum);
}

console.log(temp);

// you can use a magical ES5 here bro

// map always return a array 

const newArray = numbers.map(value => value + 1);
console.log(newArray);


