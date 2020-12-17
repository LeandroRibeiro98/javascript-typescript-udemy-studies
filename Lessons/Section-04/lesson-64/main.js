// 63. Maneiras de declarar funções

// Declaração de uma função(Function hoisting)
sayHi()

function sayHi () {
  console.log('Hi')
}

function sayHello () {
  console.log('Hello')
}

sayHello()

const myName = () => {
  return console.log('Filipe')
}
myName()

const country = function () {
  console.log('Brazil')
}
country()
