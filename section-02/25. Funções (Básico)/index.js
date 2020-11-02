function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Filipe');
console.log(variavel);


function soma(x, y) {
    const resultado = x + y
    console.log('O resultado é:')
    return resultado;
}  // Quando se define uma função, não se fecha com ";".

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));


const raiz = function (n) {
    return n ** 0.5;
};  // Nesse caso é necessário fechar com "," pois fora utilizado const.

console.log(raiz(3));
console.log(raiz(6));
console.log(raiz(9));
console.log(raiz(12));
console.log(raiz(15));
console.log(raiz(18));
console.log(raiz(21));


const raiz = (n) => {  // Arrow function
    return n ** 0.5;
};  // Nesse caso é necessário fechar com "," pois fora utilizado const.

console.log(raiz(3));
console.log(raiz(6));
console.log(raiz(9));
console.log(raiz(12));
console.log(raiz(15));
console.log(raiz(18));
console.log(raiz(21));

const raiz = (n) => n ** 0.5; // Arrow function

console.log(raiz(3));
console.log(raiz(6));
console.log(raiz(9));
console.log(raiz(12));
console.log(raiz(15));
console.log(raiz(18));
console.log(raiz(21));
