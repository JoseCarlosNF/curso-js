const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

// Axios: faz requisições http
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);
});