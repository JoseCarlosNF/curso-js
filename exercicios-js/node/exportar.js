// Tanto faz para qual variável se atribui o exports. Ela sempre aponta para module.exports
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

// Ao exports é atribuido o valor null, no entanto seu retorno é o module.exports
exports = null;
console.log(module.exports);

// Da mesma meneira se atribuido um novo objeto a exports, seu retorno será module.exports (modulos exportados, os que estão visíveis para fora)
exports = {
    nome: "Jose"
};
console.log(module.exports);

// O caminho correto a se tomar nessa situação seria.
module.exports = {
    nome: "Jose",
    sobrenome: "Ferreira"
};