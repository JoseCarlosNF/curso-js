const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

// ⭐ array.filter
// ✅ Retorna um novo array com base nas respostas, booleana, da verificação proposta
console.log(produtos.filter(function (p) {
  return p.preco > 2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro), produtos.filter(fragil))