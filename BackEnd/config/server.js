const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const server = express()

//Para interpretar os dados enviados
server.use(bodyParser.urlencoded({extended:true}))

//Verifica e interpreta json
server.use(bodyParser.json())

const PORT = process.env.PORT || 8080

server.listen(PORT,() => console.log(`Executando na porta ${PORT}`))

module.exports =server