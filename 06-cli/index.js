const Commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "nome do heroi")
        .option('-p, --poder [value]', "poder do heroi")
        .option('-i, --id [value]', "id do heroi")
        .option('-c, --cadastrar', "Cadastrar um heroi")
        .option('-l, --listar', "Listar heroi")
        .option('-r, --remover [value]', "Revmover um heroi por id")
        .option('-a, --atualizar [value]', "Atualizar um heroi por id")
        .parse(process.argv)
    const heroi = new Heroi(Commander)
    try {
        if (Commander.cadastrar) {
            delete heroi.id
            const resultado = await database.cadastrar(heroi)
            if (!resultado) {
                console.error('Heroi não foi cadastrado')
                return;
            }
            console.log("Heroi cadastrado", resultado)
            return;
        }
        if (Commander.listar) {
            const resultado = await database.listar()
            console.log(resultado)
            return;
        }
        if (Commander.remover) {
            const resultado = await database.remover(heroi.id)
            if (!resultado) {
                console.error("não foi possivel remover o heroi:", resultado)
                return;
            }
            console.log("Heroi removido com sucesso!:", resultado)
        }
        if (Commander.atualizar) {
            const idParaAtualizar = parseInt(Commander.atualizar);
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)

            const resultado = await database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado) {
                console.error("não foi possivel atualizar o heroi")
                return;
            }
            console.log("Heroi atualizado com sucesso!")

        }
    }
    catch (error) {
        console.error('Deu ruim:', error)
    }
}

main()