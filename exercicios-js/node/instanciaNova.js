// Como fazer para retornar uma nova instancia, assim pular o gargalo do cache?

// R: Uma factory retorna um objeto, uma nova instancia. Assim 'intanciaUnica.js' ficaria da seguinte forma.

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}