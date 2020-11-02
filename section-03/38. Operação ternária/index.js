// (condição) ? 'valor para verdadeiro' : 'valor para falso';

// const userScore = 999;

// if(userScore >= 1000) {
// console.log('VIP User');
// } else {
// console.log('Normal User')
// }


const userScore = 1001;
const userLevel = userScore >= 1000 ? 'VIP User' : 'Normal User';
console.log(userLevel);

const userColor = null;
const standardColor = userColor || 'Black';

console.log(userLevel, standardColor);
