const ICrud = require('./intefaces/interfaceCrud')

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('item criado com postgres')
    }
}


module.exports = Postgres