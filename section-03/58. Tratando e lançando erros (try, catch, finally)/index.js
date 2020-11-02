/** 
try {
  // É executado quando não há erros
} catch (e) {
  // É executada quando há erros
} finally {
  // Sempre
}
*/

try {
  // console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei um arquivo");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("Também sou finally.");
  }
} catch (e) {
  console.log("Tratando erro");
} finally {
  console.log("FINALLY: Eu sou executado");
}

console.log("---- **** ----");

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    seconds: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e);
} finally {
  console.log("Tenha um ótimo dia.");
}
