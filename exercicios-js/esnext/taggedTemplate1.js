// ⭐ {Tagged Template} - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes);
    console.log(...valores);
    return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
// De modo prático é como se fosse aplicada uma mascára a string.
// Onde o {primeiro} array tem os elementos de string, não interpolados
// e o {segundo} um array como os elementos que foram interpolados.
// No caso, "${aluno}" e "${situacao}".
console.log(tag `${aluno} está ${situacao}.`);
