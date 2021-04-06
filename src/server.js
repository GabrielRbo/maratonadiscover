const { response } = require("express")
const express = require("express")
const server = express()


server.get('/', (request,response) => {
    // console.log('Entrei no Index');


    return response.send('Olá!!!')
})

server.listen(3000, () => console.log('Rodando!'))