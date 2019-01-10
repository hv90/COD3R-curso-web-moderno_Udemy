const porta = 3003

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('cachorro bem-vindo, tem coisa no produtos se quiser')
})

app.get('/produtos', (req,res,next) => {
    res.send({nome: 'Produto1', preco: 123}) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`ouvindo na porta ${porta}`)
})