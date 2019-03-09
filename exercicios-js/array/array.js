// Array em JS é heterogeneo, devido a tipagem fraca da linguagem
console.log(typeof Array, typeof new Array, typeof [])

// Definindo um array
// (Metodo new Array)
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// (Literalmente)
// Array é uma estrutura indexada
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

// Adidionando novo elemento ao array
aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adicionar na ultima posição
console.log(aprovados.length) // Tamanho do array

aprovados[9] = 'Rafael' // Os elementos entre os indices 5-8 estão vazios, undefined
console.log(aprovados[8] === undefined)
console.log(aprovados.length)

aprovados.sort() // Ordena o array alfabeticamente
console.log(aprovados)

delete aprovados[1] // Deleta o primeiro elemento do array. Tornando-o undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']

// ⭐ array.splice
// ✅ Adiciona, remove, adiciona/remove (ao mesmo tempo)
aprovados.splice(1, 1)
console.log(aprovados)