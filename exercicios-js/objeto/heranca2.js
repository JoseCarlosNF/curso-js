// Cadeia de prototipos (prototype chain)
Object.prototype.atributo0 = '0' // Não fazer isso em casa!!
const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' }
const filho = { __proto__: pai, atributo3: 'C' }
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

// Criando um Prototipo
const carro = {
  // Atributos(velMax, velAtual)
  velAtual: 0,
  velMax: 200,
  // Metodos(acelerarMais, getStatus)
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  getStatus() {
    return `${this.velAtual}Kh/h de ${this.velMax}Km/h`
  }
}

// Objetos(ferrari, volvo)
const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing (sobrescreve o atributo velMax do Objeto carro)
}

const volvo = {
  modelo: 'V40',
  getsStatus() {
    return `${this.modelo}: ${super.status()}`
  }
}

// Estabelecendo a relação entre os objeto ferrari e volvo e o prototipo carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Testando
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.getStatus())

ferrari.acelerarMais(300)
console.log(ferrari.getStatus())