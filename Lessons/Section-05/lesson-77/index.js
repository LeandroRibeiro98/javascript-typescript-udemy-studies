// Revisão Arrays

const names = ['Pedro', 'Fernanda', 'Paula', 'Robert', 'Francielle']
names[6] = 'John' // insere o nome John no índice 6, porém o índice 5 fica vazio
console.log(names, `\n`)

let cities = Array('Rio de Janeiro', 'São Paulo', 'Florianópolis')
// i é o índice a ser removido
const deleteCity = (i) => {
  // del deleta o índice em uma determinada posição
  del = delete cities[i]
  // imprime o os valores no array
  console.log(cities)
  // imprime o tamanho do array
  console.log(cities.length, `\n`)
}

deleteCity(2)

// push insere um novo elemento no fim do array
cities.push('Curitiba')
console.log(cities, `\n`)

// remove o o ultimo elemento do array
const removed1 = cities.pop()
console.log(cities)
console.log(removed1, `\n`)
// remove o elemento do índice 0
const removed2 = cities.shift()
console.log(cities, removed2)
// adiciona um elemento no índice 0
const addCity = cities.unshift('Tokyo')
console.log(cities, `\n`)

// fatia o array
const newArray1 = names.slice(0,2)
console.log(newArray1)

const newArray2 = names.slice(-1)
console.log(newArray2, `\n`)

// separa valores com um caracter, espaço, etc, transformando a string em um array
const book = 'O Bazar Atômico'
const bookSplit = book.split(' ')
console.log(bookSplit)
console.log(typeof(bookSplit), `\n`)

// transforma um array em uma string
const joinArray = bookSplit.join(' ')
console.log(joinArray)
console.log(typeof(joinArray), `\n`)
