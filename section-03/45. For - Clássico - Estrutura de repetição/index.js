// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


//  index
for (let i = 0; i<= 10; i++) {
    console.log(`Linha ${i}`);
}


for (let j = 0; j<= 1000; j += 10) {
    console.log(`Linha ${j}`);
}


for(let k = 800; k >= 500; k -= 10) {
    console.log(`Linha ${k}`);
}


// número par ou ímpar
for(let num = 0; num <= 10; num++) {
    const par = num % 2 === 0 ? 'par' : 'ímpar';
    console.log(num, par);
}


const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let f = 0; f < frutas.length; f++) {
    console.log(`Índice ${f}`, frutas[f]);
}

