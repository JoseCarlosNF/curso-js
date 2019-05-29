// Qual a mulher chinesa com o menor salário?
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

// Sempre que o país for igual a "China", retorna verdadeiro
const chineses = busca => busca.pais === "China";
// Sempre que o genero do elemento analisado for "F", feminino, retorna verdadeiro
const mulheres = busca => busca.genero == "F";
// Retorna o salario do 'funcionario' se ele for menor que o salario do 'funcionarioAtual'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

// Axios: faz requisições http
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios);

    // Mulher chinesa com o menor salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})