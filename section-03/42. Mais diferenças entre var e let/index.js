// const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

// let nome = 'Filipe'; // criando

// var nome2 = 'Filipe';

// if (verdadeira) {
//     let nome = 'Gomes'; // criando
//     console.log(nome, nome2 );

//     if (verdadeira) {
//         let nome = 'Cowboy Bebop';
//         console.log(nome, nome2);
//     }
// }

const verdadeira = true

function falaOi() {
    if (verdadeira) {
        let nome = 'Filipe';
        var sobrenome = 'Gomes';
        // console.log(nome, sobrenome);
    }
    console.log(sobrenome)
}

falaOi();
