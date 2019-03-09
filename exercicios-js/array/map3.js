// 🔆 Simuladando Implementação de map

Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

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

const resultado = carrinho.map2(jsonToObj).map2(soPreco)
console.log(resultado)