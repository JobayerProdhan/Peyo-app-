const person ={
    name : 'hena',
    age : 30,
    freinds : ['korim,"hero alom'],
    details : {
        job : 'yes',
        isMarried : true,
        status : 'Not found',
        father : {
            name: 'Akkas ali'
        }

    }
}

console.log(person.name)
console.log(person.freinds[0]);
console.log(person.details.job)
console.log(typeof person.details.isMarried)
console.log(person.details.father.name)
console.log(person.details.mother.name) // An error having which is 