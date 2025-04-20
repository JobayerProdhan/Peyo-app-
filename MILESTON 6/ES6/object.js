const hena = {
    name : 'hena',
    age : 10,
    country : 'bd',
}

// Object.seal(hena);
// hena.stutus = 'not found';
// console.log(hena)
// Object.freeze(hena);
// hena.age = 89;
// console.log(hena)

// console.log(Object.keys(hena));
// console.log(Object.values(hena));
// console.log(Object.entries(hena));

for(let key in hena){
    console.log(key);
}

for (let [key,value] of Object.entries(hena)){
    console.log(`Key :${key} value :${value}`);
}

