// Objeto Prototipo
const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Definir pai como protoipo das filhas
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

// Testar o Objeto filha2
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Mostrar chaves dos objetos. As chves não são herdadas do prototype
// Aparecem apenas as que foram definidas, no caso os nomes
console.log(Object.keys(filha1), Object.keys(filha2))

// Testar se o atributo pertence ao objeto ou veio por herança
for(let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por Herança ${key}`)
}