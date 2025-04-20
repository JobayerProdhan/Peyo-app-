const numbers = [1,2,3,4,5,6];

const squareArray  = numbers.map(element => element * element);
console.log(squareArray)


const freinds = ['jobayer','prodhan','mahabuba'];
console.log(freinds.map(element => element));

console.log(freinds.map((element,index) => (index,element)))

const newFriends = freinds.map((element,index) => {
    console.log(index);
    return element;
})
