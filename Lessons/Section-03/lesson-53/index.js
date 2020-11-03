const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for of
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o numero 2");
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("---- **** ----");

// for of
for (let i of numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o numero 2");
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("---- **** ----");

// while
let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o numero 2");
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    i++;
    break;
  }

  i++;
}

console.log("---- **** ----");

// do while
let n = 0;
do {
  let numero = numeros[n];

  if (numero === 2) {
    console.log("Pulei o numero 2");
    n++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    n++;
    break;
  }

  n++;
} while (n < numeros.length);
