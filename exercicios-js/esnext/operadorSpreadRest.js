// 🔁 {Rest}   Junta
// 💥 {Spread} Espalha

// ⭐ Como usar Spread💥 com objetos.
const funcionario = { nome: "Maria", salario: 12348.99 };
// Espalhar dentro do objeto "clone" os atributos e valores do objeto "funcionarios".
const clone = { ativo: true, ...funcionario};
// O objeto "clone" não aponta para o objeto "funcionario".
// Dessa forma qualquer alteração feita em "clone" não refletira em "funcionarios"
console.log(clone);

// ⭐ Como usa Spread💥 com arrays.
const grupoA = ["Jose" , "Grazi", "João"];
// A abordagem da manipulação do objetos com Spread aplica-se da mesma forma.
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);