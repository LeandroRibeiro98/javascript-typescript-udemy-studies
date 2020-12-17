const alunos = ['Wendy', 'Petter', 'John'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[1] = 'Mark'; // Adiciona uma dado em um indice do array
console.log(alunos);

alunos [3] = 'Petter';
console.log(alunos);

alunos.push('Victoria');  // Adiciona um dado ao final do array
console.log(alunos);

alunos.unshift('Mary');  // Adiciona um dado no indice 0 do array
console.log(alunos);

const removido = alunos.pop();  // Remove do array um dado
console.log(alunos);
console.log(`\n${removido} foi removido(a) do array !!!`);

const deletado = delete alunos [2];
console.log(alunos);
console.log(`\n${deletado} foi deletado(a) do array !!!`)