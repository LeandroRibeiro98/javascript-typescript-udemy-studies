/**
 * Escreva uma função que receba um número e
 * retorne o seguinte:
 * Número é divisível por 3 = /3
 * Número é divisível por 5 = /5
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o próprio número.
 * Checar se o número é realemente um número  = Retorna o próprio número.
 * Use a função com números de 0 a 100.
 */
function fizzBuzz(n) {
  if(typeof n !== 'number') return n;
  if (n % 3 == 0 ) return "/three";
  if (n % 5 == 0 ) return "/five";
  if (n % 3 == 0 && n % 5 == 0) return "/three & /five";
  return n;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}