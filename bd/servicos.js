import { act } from "react";
import { produtos } from "./bd.js";

function listarProdutos(){
    return produtos
}

function listarPorCategoria(categoria){
    const produtosFiltrados = produtos.filter(produto => 
        produto.categoria === categoria
    );
    return produtosFiltrados
}

function contarDinheiroEstoque(){
    let total = produtos.reduce((acumulador, produto) => {
        return acumulador + (produto.preco * produto.quantidade);
    }, 0);
    return total;
}

function buscarProdutoPorId(id){
    return produtos.find(produto => produto.id === id)
}

function buscarProdutoPorNome(nome){
    return produtos.find(produto => produto.nome === nome);
}

function buscarQuantidadeMenor10(){
    return produtos.filter(produto => produto.quantidade < 10);
}

function top5ItensMaisCaros(){
    const produtosOrdenados = [...produtos].sort((a, b) => b.preco - a.preco);
    return produtosOrdenados.slice(0, 5);
}   

function maiorPreco(){
    return produtos.reduce((maior, produto) => {
        return produto.preco > maior.preco ? produto : maior;
    }, produtos[0]);
}

function dinheiroPorCategoria(){
    return produtos.reduce((categorias, produto) => {
        if (!categorias[produto.categoria]) {
            categorias[produto.categoria] = 0;
        }
        categorias[produto.categoria] += produto.preco * produto.estoque;
        return categorias;
    }, {});
}




export {listarProdutos, listarPorCategoria, contarDinheiroEstoque, buscarProdutoPorId, buscarProdutoPorNome, buscarQuantidadeMenor10, top5ItensMaisCaros, maiorPreco, dinheiroPorCategoria}