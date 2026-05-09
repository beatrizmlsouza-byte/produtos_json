import express from 'express'

import { listarProdutos, listarPorCategoria, contarDinheiroEstoque, buscarProdutoPorId, buscarProdutoPorNome, buscarQuantidadeMenor10, top5ItensMaisCaros, maiorPreco, dinheiroPorCategoria } from './bd/servicos.js'


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
   let produtos = listarProdutos()
   res.json(produtos)
})

app.get('/produtosCategoria/:categoria', (req, res) => {
   let {categoria} = req.params
   let produtosFiltrados = listarPorCategoria(categoria)
   res.json(produtosFiltrados)
})

app.get('/contarDinheiroEstoque', (req, res) => {
   let total = contarDinheiroEstoque()
   res.json(total)
})

app.get('/buscarProdutoPorId/:id', (req, res) => {
   let {id} = req.params
   let produto = buscarProdutoPorId(Number(id))
   res.json(produto)
})

app.get('/buscarProdutoPorNome/:nome', (req, res) => {
   let {nome} = req.params
   let produto = buscarProdutoPorNome(nome)
   res.json(produto)
})

app.get('/buscarQuantidadeMenor10', (req, res) => {
   let produtos = buscarQuantidadeMenor10()
   res.json(produtos)
})

app.get('/top5ItensMaisCaros', (req, res) => {
   let produtos = top5ItensMaisCaros()
   res.json(produtos)
})

app.get('/maiorPreco', (req, res) => {
   let produto = maiorPreco()
   res.json(produto)
})

app.get('/dinheiroPorCategoria', (req, res) => {
   let categorias = dinheiroPorCategoria()
   res.json(categorias)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

