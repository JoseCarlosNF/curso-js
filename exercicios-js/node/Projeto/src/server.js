// ⭐ Observações gerais:
// 1. Todas as repostas, "send", são um JSON.

const porta = 3003;

const express = require('express');
const app = express();
const database = require('./database');
const bodyParse = require('body-parser');

// 📌 {Sempre} que for feita uma requisição ao servidor {será executada} a função abaixo.
// Transforma o corpo da requisição em objeto
app.use(bodyParse.urlencoded({ extended: true }));

// 📌 Função retorna {todos os produtos} cadastrados na base.
// ⚠ Ao utilizar o metodo "use" todas as requisições ao servidor irão retornar a mesma função.
app.get(`/produtos`, (requisicao, resposta, next) => {
    resposta.send(database.getProdutos());
})

// 📌 Função retorna o objeto de acordo com a "url encoded" passada, ou seja, retorna o {produto pelo id}.
app.get(`/produtos/:id`, (requisicao, resposta, next) => {
    resposta.send(database.getProduto(requisicao.params.id));
})

// 📌 Função cadastra {novos pordutos} na base de dados.
app.post(`/produtos`, (requisicao, resposta, next) => {
    const produto = database.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto);
})

// 📌 Função altera o cadastro de um produto.
app.put(`/produtos/:id`, (requisicao, resposta, next) => {
    const produto = database.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco,
        id: requisicao.params.id
    })
    resposta.send(produto);
})

// 📌 Função que exclui um produto.
app.delete(`/produtos/:id`, (requisicao, resposta, next) => {
    const produto = database.excluirProduto(requisicao.params.id);
    resposta.send(produto);
})

// 📌 Função que ativa a escuta do servidor na porta anteriormente determinada
app.listen(porta, () => {   
    console.log(`Servidor ativo na 🚪 ${porta}`);
})

