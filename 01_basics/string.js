//const name="Satinder"
//const repoCount=50
//
//console.log(name +repoCount+ "value")

//console.log(`Heloo my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Satinder-Si')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.indexOf('t'))
const newString= gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8, 4)
console.log(anotherString)

const twString="     satinder     "
console.log(twString.trim())

const url ="https://satinder.com/satinder%20sfjiojfof"

console.log(url.replace('%20','-'))

console.log(gameName.split('-'))
