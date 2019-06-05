// Importar arquivo com as modificações no global
require('./global');

// Imprimir função 'saudacao' de 'MinhaApp' que pertence ao 'global'
console.log(MinhaApp.saudacao());

// ATENÇÃO: Os valores podem ser modificados, uma pratica não aconselhavel, mas possível.
console.log(`😀: ${MinhaApp.nome}`);
MinhaApp.nome = 'Eita Mudou!';
console.log(`😀: ${MinhaApp.nome}`);

// Como trasnpor esse obtaculo?
// R: Deve-se congelar o objeto. Como é o caso de 'MinhaAppCongelado'.
console.log(`❄️: ${MinhaAppCongelado.nome}`);
MinhaAppCongelado.nome = 'Eita Mudou!';
console.log(`❄️: ${MinhaAppCongelado.nome}`);
// Essa é a medida mínima a ser tomada, no caso da alteração do objeto global.
// A fim de manter a integridade do sistema.