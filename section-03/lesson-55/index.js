/**
 * Escreva uma função chamada ePaisagem que receba
 * dois argumentos, largura e altura de uma imagem
 * (number). Retorne true se a imagem estiver no modo
 * paisagem.
 */
function ePaisagem1(largura, altura) {
  return largura > altura ? true : false;
}

console.log(ePaisagem1(1920, 1080));

console.log("---- **** ----");

// Arrow function
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1920, 1080));
