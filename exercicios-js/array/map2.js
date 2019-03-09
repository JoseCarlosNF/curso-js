// Desafio

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retorna um Array apenas com preços

// Transformar JSON para Objeto
const jsonToObj = e => JSON.parse(e)
// Imprimir apenas o segundo elemento do Objeto
const soPreco = obj => obj['preco']

const resultado = carrinho.map(jsonToObj).map(soPreco)
console.log(resultado)