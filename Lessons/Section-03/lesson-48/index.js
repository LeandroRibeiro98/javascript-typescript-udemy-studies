// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas) {
    console.log(i);
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Filipe',
    sobrenome: 'Gomes',
    idade: 29
};

for (let keys in pessoa) {
    console.log(keys,pessoa[keys]);
}
