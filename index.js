const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: Criar um endpoint /oi
app.get('/oi', function (req, res){
  res.send('Olá, Mundo!')
})

//lista de personagens

const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith' ]

//READ All - [GET] /item
app.get('/item', function (req, res){
  //Pegamos a lista e enviamos como resposta HTTP
  res.send(lista)
})

app.listen(3000)