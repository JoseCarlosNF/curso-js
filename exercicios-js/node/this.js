// Fora de uma função 'this' aponta para 'exports'
console.log(this === global);

// This é um objeto que faz referência ao module.exports
console.log(this === module);
// module.exports & exports. Apontam para o mesmo objeto
console.log(this === module.exports);
console.log(this === exports);

// Variação de apontamento do 'this'
function logThis() {
    console.log(`Dentro de uma função...`);
    // Dentro de uma função o 'this' não aponta para 'exports'
    console.log(this === exports);
    console.log(this === module.exports);

    // Dentro de uma função aponta para 'global'
    console.log(this === global);

    this.perigo == 'Aqui o escopo global está sendo modificado';
}

this.perigo == 'Aqui o module.exports está sendo modificado';
logThis();