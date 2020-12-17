function anything (a, b, c) {
  let total = 0
  for (const x of arguments) {
    total += x
  }
  console.log(total, a, b, c)
}
anything(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function anotherThing (a, b = 0, c = 11) {
  b = b || 0
  console.log(a + b + c)
}
anotherThing(10, 8)
anotherThing(3, 4, undefined)
anotherThing(null, 4, undefined)

function person ({ name, surname, age }) {
  console.log(name, surname, age)
}
const obj = { name: 'Filipe', surname: 'Gomes', age: '29' }
person(obj)

function calc (operator, accumulator, ...numbers) {
  for (const number of numbers) {
    if (operator === '+') accumulator += number
    if (operator === '-') accumulator -= number
    if (operator === '*') accumulator *= number
    if (operator === '/') accumulator /= number
  }
  console.log(accumulator)
}
calc('+', 2, 6, 10, 14, 18, 22)
calc('-', 2, 6, 10, 14, 18, 22)
calc('*', 2, 6, 10, 14, 18, 22)
calc('/', 2, 6, 10, 14, 18, 22)
