const pessoa = {
    suadacao: 'Bom dia!',
    falar() {
        console.log(this.suadacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()