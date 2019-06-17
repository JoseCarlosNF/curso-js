// ⭐ {Map} - Retorna um conjugado de chave/valor.
const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

// Outra forma de utilização do Map.
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

// Retorna um valor boleano referente a existência do parametro no Objeto Map.
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123); // retorna valor boleano refernete ao status de deletar ou não.
console.log(typeof(chavesVariadas));