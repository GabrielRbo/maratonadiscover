const { response } = require("express")
const express = require("express")
const server = express()
const routes = require('./routes')

// Habilitar arquivos statics
server.use(express.static("public"))

// Usar os rotas
server.use(routes)


server.listen(3000, () => console.log('Rodando!'))