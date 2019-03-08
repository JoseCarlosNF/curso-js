// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
console.log(pessoa)

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// Congela o objeto. Tornado-o impossivel de ser alterado de quaquer forma
Object.freeze(pessoa)


pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)
pessoaConstante.nome = 'Antonio'
console.log(pessoaConstante)