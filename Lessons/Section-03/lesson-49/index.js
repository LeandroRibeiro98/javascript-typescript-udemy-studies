const nome = ['Filipe', 'Gomes', 'de', 'Lima'];

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('_____');

for(let i in nome) {
    console.log(nome[i]);
}

console.log('_____');

for (let valor of nome) {
    console.log(valor);
}

console.log('_____');

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});
