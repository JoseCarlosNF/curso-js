function getInteriorAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteriorAleatorio(-1, 10)
    console.log(`Opção foi ${opcao}.`)
}

console.log('Até a proxima!')