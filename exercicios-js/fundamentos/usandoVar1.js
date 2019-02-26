/*
    Variaveis declaradas dentro de funções apenas são visiveis 
dentro da função.

    Variaveis criadas fora de funções são globais, logo são
visiveis dentro de todo o escopo do codigo.
*/

{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)       // Dentro de blocos, mas globais
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)      // Dentro da função
}

teste()
console.log(teste)      // Error: Fora do alcance - Função 'teste'.