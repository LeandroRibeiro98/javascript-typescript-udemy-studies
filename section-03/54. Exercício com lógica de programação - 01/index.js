// Escreva uma função que recebe 2 números
//  e retorne o maior deles.
function max1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

const num1 = max1(10, 2);
console.log(`The higher number is: ${num1}`);
// console.log(max1(1,3));

console.log("---- **** ----");

function max2(x, y) {
  if (x > y) return x;
    return y;
};

const num2= max2(29, 31);
console.log(`The higher number is: ${num2}`);

console.log("---- **** ----");

function max3(x, y) {
  return x > y ? x : y;
};
 
const num3= max3(100, 200);
console.log(`The higher number is: ${num3}`);

console.log("---- **** ----");

const max4 = (x, y) => {
  return x > y ? x : y;
};

const num4= max3(22, 80);
console.log(`The higher number is: ${num4}`);

console.log("---- **** ----");

const max5 = (x, y) => x > y ? x : y;
console.log(`The higher number is: ${max5(5, 1)}`);
