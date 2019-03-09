// Declaração literal de array
const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

// ⭐ array.forEach
// ✅ retorna na seguinte ordem: valor, indice, array completo

// Definindo a função de callback

// (Função Tradicional)
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}: ${nome}`)
})

// (Função inline)
aprovados.forEach(nome => console.log(nome))

// (Função declarada externamente)
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)