// 📌 Objetos
// ES6: Object.values/Object.entries
const obj = {a: 1, b:2, c:3};

// ⭐ Object.values
// Retorna um array {apenas} com os {valores} do {objeto} passado como parametro.
console.log(Object.values(obj));

// ⭐ Object.entries
// Retorna um {array de arrays}. Contendo, cada array, dois elementos, equivalentes a {chave(0) e valor(1)}.
console.log(Object.entries(obj));

// ⭐ Melhorias na Notação literal
// 1. Criação de atributos que tenham o mesmo nome de variaveis no codigo. Antigo "nome: nome".
// 2. Criação de funções. Não mais necessário utilizar "ola: function () { ...}"
const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return `Olá Gente!!`;
    }
}
console.log(pessoa.nome, pessoa.ola());

// ⭐ CLass
class Animal {};
class Cachorro extends Animal {
    falar() {
        return `Au au!`
    }
}

console.log(new Cachorro().falar())