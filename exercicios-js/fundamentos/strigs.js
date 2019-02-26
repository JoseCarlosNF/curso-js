const escola = 'Cod3r';

console.log(escola.charAt(4))
/*
 Identifica o caracter de ordem 4ª
*/
console.log(escola.charCodeAt(3))
/*
 Identifica o numero decimal corespondente ao char
 na tabela UniCode.
*/
console.log(escola.indexOf('3'))
/*
 Buscar o conteduo especificado na string
*/
console.log(escola.substring(1))
/*
 Mostra os componentes da string a partir do definido.
*/
console.log(escola.substring(0, 3))
/*
 Igualmente, mostra os compnentes da string, apartir do primeiro argunmento 
 até o segundo argumento, sem o segundo argumento.
 (Ponto inicial, Ponto final)
*/
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
/*
 Formas de Concatenação
*/
console.log(escola.replace(3, 'e'))
/*
 Substitui o conteudo da posição 3 pelo 'e'.
*/
console.log('Ana,Maria,Pedro'.split(','))
/*
 Deconposição de uma string em array.
 O simbolo (,) denota em quais partes será divida a string
*/