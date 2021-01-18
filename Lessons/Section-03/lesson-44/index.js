const pessoa = {
    nome: 'Filipe',
    sobrenome: 'Gomes',
    idade: 29,
    endereco: {
        rua: 'Av. Ayrton Senna',
        numero: 369
    }
};

// Atribuição via desestruturação (destructuring assignment)
const {nome, sobrenome, idade, endereco: {rua, numero}} = pessoa;
console.log(nome, sobrenome, idade, rua, numero);
