const names = ['Filipe', 'Gomes', 'de', 'Lima'];

for (let i = 0; i < names.length; i++) { // for clássico
  console.log(names[i]);
};

console.log("---- *** ----");

for (let i in names) {
  console.log([i]); // retorna os índices
  console.log(names[i]);    // retorna os nomes
};

console.log("---- *** ----");

for (let valor of names) {
  console.log(valor);
};

console.log("---- *** ----");

names.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});


const person = {
    name: 'Filipe',
    surname: 'Gomes'
};

for (let key in person) {
    console.log(key, person[key]);
};
