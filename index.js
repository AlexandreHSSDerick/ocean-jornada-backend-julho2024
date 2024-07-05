const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()


const dbUrl = 'mongodb+srv://admin:EASoVZkzFTaBe6kL@cluster0.wmjtowa.mongodb.net'
const dbName = 'ocean-jornada-backend'

const client = new MongoClient(dbUrl)

async function main() {
  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados criado com sucesso')

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  // Desafio: Criar um endpoint /oi
  app.get('/oi', function (req, res) {
    res.send('Olá, Mundo!')
  })

  //lista de personagens

  const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

const db = client.db(dbName)
const collection = db.collection('item')

  //READ All - [GET] /item
  app.get('/item', async function (req, res) {
    //Obter todos os documentos dentro da collection
    const documentos = await collection.find().toArray()

    //Pegamos os documentos e enviamos como resposta HTTP
    res.send(documentos)
  })

  //Sinalizamos para o express que vamos usar json
  app.use(express.json())

  //CREATE - [POST] /item
  app.post('/item', function (req, res) {
    //Obtemos o nome enviado no Request Body
    const item = req.body.nome

    //Inserimos o item no final da lista
    lista.push(item)

    //Enviamos uma mensagem de sucesso!
    res.send('Item Criado com Sucesso')

  })

  //READ By ID - [GET] /item/:id
  app.get('/item/:id', function (req, res) {
    //Acessamos os parâmetros da Rota ID
    const id = req.params.id

    //Acessamos o item na lista pelo indice corrigido [id - 1]
    const item = lista[id - 1]

    //Enviamos o item obtido como resposta
    res.send(item)
  })

  //Update - [PUT] /item/:id

  app.put('/item/:id', function (req, res) {
    //Acessamos o ID do parâmetro de Rota
    const id = req.params.id

    //Acessamos o novoItem no body da requisição
    const novoItem = req.body.nome

    //Atualizamos a lista com a nova informação
    lista[id - 1] = novoItem

    //Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' + id)
  })
  app.listen(3000)
}

main()