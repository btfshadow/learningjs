class NotImplementdException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementdException()
    }

    read(query) {
        throw new NotImplementdException()
    }

    update(id, item) {
        throw new NotImplementdException()
    }

    delete(id) {
        throw new NotImplementdException()
    }
    isConnected() {
        throw new NotImplementdException()
    }
}

module.exports = ICrud