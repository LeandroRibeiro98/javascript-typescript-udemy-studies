// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data1 = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
const data2 = new Date(2019, 3); // a, m, d, h, M, s, ms

console.log(data1.toString());
console.log(data2.toString());


const data3 = new Date('2020-03-03 14:36:23');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); // começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia da semana', data3.getDay()); // 0 - Domingo
console.log(data3.toString());
console.log(Date.now());

const data4 = new Date(Date.now());
console.log(data4.toString());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);
