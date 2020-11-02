const elementos = [
    { tag: 'p', texto: 'Vamos vencer !!!' }, // 0
    { tag: 'div', texto: 'Frase 2' }, // 1
    { tag: 'section', texto: 'Frase 3' }, // 2
    { tag: 'footer', texto: 'Frase 4' }, // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement('p');
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
