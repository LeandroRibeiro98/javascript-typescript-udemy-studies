const employee = 'Filipe'
const obj = {employee}
const newObj = { ...obj }
console.log(newObj)


// comando para criar o bundle utilizando o babel:
// npx babel main.js -o bundle.js --presets=@babel/env
