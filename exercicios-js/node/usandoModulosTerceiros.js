// pacotes instalados: nodemon (refresh automatico), lodash (canivete suiço, várias funções)

const _ = require('lodash')
setInterval( () => console.log(_.random(10, 300)), 500)