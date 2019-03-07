function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Noteboook',
    preco: 3300.00,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.10

// Chamar diretamente
console.log(getPreco())

// Chamar diretamente no contexto
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

// Contexto, parametros de getPreco
console.log(getPreco.call(carro, 0.17, '$'))

// COntexto, array com os parametros
console.log(getPreco.apply(carro, [0.17, '$']))