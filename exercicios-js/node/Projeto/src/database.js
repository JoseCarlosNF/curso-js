// 📌 Retornar o {valor do útlimo id} OU {incrementar em cima de último}.
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

// ⭐ Objeto onde serão armazenados os objetos/produtos.
const produtos = {};

// 📌 Função que salva um produto.
function salvarProduto(produto) {
    // Se o id do produto não existir. Ele recebe o valor do último id incrementado de uma unidade, através de 'sequence.id'.
    if (!produto.id) produto.id = sequence.id;

    // Se o produto tiver já tiver id. Ele irá receber seu objeto, nome e preço, por exemplo, mais atualizado.
    produtos[produto.id] = produto;

    // No final irá retornar o objeto produto já com seu devido id.
    return produto;
}

// 📌 Função que retorna o obejeto do produto relacionado ao id passado como parâmetro.
function getProduto(id) {
    // Busca no objeto "produtos" pelo id. Caso não encrontre-o retorna um objeto vázio.
    return produtos[id] || {};
}

// 📌 Função que retorna todos os valores do objeto "produtos".
function getProdutos() {
    return Object.values(produtos);
}

// 📌 Função que exclui e rotorna o produto passado como parametro.
function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

// 📡 Exportando as funções
module.exports = { salvarProduto, getProduto, getProdutos , excluirProduto};