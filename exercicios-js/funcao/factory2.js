function criarProduto(nome, preco, desconto = 0.1) {
    return { nome, preco, desconto }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))