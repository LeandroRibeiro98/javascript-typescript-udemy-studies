const array = [1, 2, 3]
array.push(4)
array[0] = 'Filipe'
console.log(array)

const person1 = {
  name: 'Jackie',
  lastname: 'Chan',
  age: 65
}

console.log(person1.name)
console.log(person1.lastname)
console.log(person1.age)

function creatPerson (name, lastname, age) {
  return { name, lastname, age }
}

const person2 = creatPerson('Jackie', 'Chan', 65)
const person3 = creatPerson('Marry', 'Polsk', 18)
const person4 = creatPerson('Victoria', 'Kalmar', 19)

console.log(person1.name, person1.lastname, person1.age)
console.log(person2.name, person2.lastname, person2.age)
console.log(person3.name, person3.lastname, person3.age)
console.log(person4.name, person4.lastname, person4.age)

const person5 = {
  name: 'Jackie',
  lastname: 'Chan',
  age: 65,
  speak () {
    console.log(`My current age is ${this.age}.`)
  },

  increaseAge () {
    this.age++
  }
}

person5.speak()
person5.increaseAge()
person5.speak()
