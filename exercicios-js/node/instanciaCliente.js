// Ambos os contadores retornam o mesmo objeto, logo compartilham do mesmo objeto.
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// Os contadores abaixo retornam objetos diferentes, logo retornam funções diferentes.
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

// Retorna objeto:
    // const contador = require('./instanciaNova');
// Retorna função:
    // const contador = require('./instanciaNova')();

// ------------ INSTANCIA UNICA ---------------------------

// Valores antes do incremento
console.log(`A: ${contadorA.valor}, B:${contadorB.valor}`);

// Valores após o incremento
contadorA.inc();
contadorA.inc();
console.log(`A: ${contadorA.valor}, B:${contadorB.valor}`); // Ambos os valores são alterados

// ------------ INSTANCIA NOVA ---------------------------

// Valores antes do incremento
console.log(`C: ${contadorC.valor}, D:${contadorD.valor}`);

// Valores após o incremento
contadorC.inc();
contadorC.inc();
console.log(`C: ${contadorC.valor}, D:${contadorD.valor}`); // Apenas o valor de C é alterado