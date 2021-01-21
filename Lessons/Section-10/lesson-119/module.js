const book = 'A Física dos Explosivos nucleares'
const author = 'Dalton Ellery G. Barroso'

// const sayValues = () => {
//   return (`book: ${book}`, `\nauthor: ${author}`)
// }

const sayValues = () => book + ' ' + author


// module.exports.book = book
// module.exports.author = author

exports.book = book
exports.author = author
exports.sayValues = sayValues
this.any = 'any where'
this.simulation = [
  'Neutrônica',
  'Hidrodinâmica Acoplada',
  'Explosão Nuclear'
]

console.log(module.exports)
