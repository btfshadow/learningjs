const ICrud = require('./intefaces/interfaceCrud')

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('item criado com mongo')
    }
}

module.exports = MongoDB