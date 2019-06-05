// console.log(global);

// Modificações dentro do global (não recomendado)
global.MinhaApp = {
    saudacao () {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

global.MinhaAppCongelado = Object.freeze({
    saudacao () {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})