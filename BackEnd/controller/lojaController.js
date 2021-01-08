const database = require('../data/database').default
const { request, response } = require('../config/server')

module.exports = function(router){
    router.get('/getAll', (request,response) => {
        response.json(database)
    })

    router.get('/jogos/:id', (request, response)=>{
        let id = request.params.id
        let game = database.filter(game => game.id == id)[0]
        response.json(game)
    })

    router.post('/jogos',(request,response)=>{
        let novoJogo = {
            id: database.length + 1,
            titulo: request.body.titulo,
            preco: request.body.preco
        }
        database.push(novoJogo)
        response.json(novoJogo)
    })

}