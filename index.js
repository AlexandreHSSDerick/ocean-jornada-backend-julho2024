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

//Sinalizamos para o express que vamos usar json
app.use(express.json())

//CREATE - [POST] /item
app.post('/item', function (req, res){
//Obtemos o nome enviado no Request Body
  const item = req.body.nome

//Inserimos o item no final da lista
  lista.push(item)

//Enviamos uma mensagem de sucesso!
  res.send('Item Criado com Sucesso')
  
})

//READ By ID - [GET] /item/:id
app.get('/item/:id', function (req, res){
  //Acessamos os parâmetros da Rota ID
  const id = req.params.id

  //Acessamos o item na lista pelo indice corrigido [id - 1]
  const item = lista[id - 1]

  //Enviamos o item obtido como resposta
  res.send(item)
})


app.listen(3000)