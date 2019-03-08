// Criar objeto 'pessoa' literalmente
const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

// Imprime respectivamente as chaves, valores e entradas(conteudo) do objeto
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/* Percorre o objeto por meio do forEach.
Dando como parametro o array retornado por Object.entries(pessoa) */
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

// Define uma propriedade do objeto(de forma muito CONTROLADA)
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2) // Concatena os objetos o1, o2 no objeto destino
console.log(destino)

Object.freeze(obj) // Congela/Impede a mudança das propriedades do objeto
obj.c = 1234
console.log(obj.c)