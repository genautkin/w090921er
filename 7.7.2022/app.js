//https://www.tutorialsteacher.com/nodejs/nodejs-module-exports

const obj = require('./modules');
const {print,print2} = require('./modules2')
console.log(obj.firstName)


const fullname = {
    firstName: 'James',
    lastName: 'Bond',
    address: 'Lorem10'
}

let {firstName, lastName} = fullname;
firstName = 'hackeru'
console.log(firstName, lastName)
console.log(fullname)
print(firstName, lastName)