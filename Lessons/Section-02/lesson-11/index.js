const name = 'Filipe'
const lastName = 'de Lima'
const age = 29
const weigth = 72
const heightMeters = 1.80

const bmi = weigth / (heightMeters * heightMeters)
const birthYear = 2020 - age

console.log(`${name} ${lastName} has ${age} years, heighs ${weigth} kg`)
console.log(`Has ${heightMeters} meters tall and your BMI is ${bmi.toFixed(2)}`)
console.log(`${name} was born in ${birthYear}.`)
