const {
    deepStrictEqual,
    ok
} = require('assert')
const { obterDadosAquivo } = require('./database')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const DEFAULT_ITEM_AtUALIZAR = {
    nome: 'Lanterna Verde',
    poder: 'Luz Verde',
    id: 2
}

describe('Suite de manipulação de hérois', () =>{
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_AtUALIZAR)
    })
    it('deve pesquisar um heroi usando arquivos', async () =>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepStrictEqual(resultado, expected)
    })
    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepStrictEqual(atual, expected)
    })
    it('deve remover um heroi por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        
        deepStrictEqual(resultado, expected)
    })

    it('deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_AtUALIZAR,
            nome: 'Batman',
            poder: 'dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_AtUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_AtUALIZAR.id)
        deepStrictEqual(resultado, expected)
    })
})