// ...rest, ...spread

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNum, secondNum, ...rest] = num1;
console.log(firstNum, secondNum);
console.log(rest);


const num2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(num2[2] [1]);


const num3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[,[,,six]] = num3;
console.log(six);


const num4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[list1, list2, list3] = num4;
console.log(list3);
console.log(list3[0]);
