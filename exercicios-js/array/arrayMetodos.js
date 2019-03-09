const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// ⭐ array.pop
// ✅ remove último o elemento do array
pilotos.pop()

// ⭐ array.push
// ✅ adiciona um elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)

// ⭐ array.shift
// ✅ remove primeiro o elemento do array
pilotos.shift()
console.log(pilotos)

// ⭐ array.unshift
// ✅ adiciona um elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// ⭐ array.splice
// ✅ Adiciona, remove, adiciona/remove (ao mesmo tempo)
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

// ⭐ array.slice
// ✅ retorna um novo array a partir dos índices passados como parametros
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)