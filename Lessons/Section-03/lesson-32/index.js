/*
&& -> falsae && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false
'' "" ``
null / undefined
NaN
*/
console.log('Luffy' && true && 'Zoro');

console.log('Bebop' && 'Jojo');
console.log('Bebop' && `` && 'Jojo');
console.log('Bebop' && null && 'Jojo');
console.log('Bebop' && "" && 'Jojo');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());


function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'Teddy';

console.log(vaiExecutar && falaOi());


console.log(0 || false || 'Filipe' || true);


const corUsuario = 'verde';
const corPadrao = corUsuario || 'roxo';

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false'; // string, por isso será exibida pois é verdadeira (true)
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
