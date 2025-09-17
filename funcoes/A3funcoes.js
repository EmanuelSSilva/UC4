import promptSync from 'prompt-sync';
import { adcionaQuant, adicioproduto, adcionaValor, listaEstoque, consultaEstoque  } from './exporfuncoes.js';
//import {adicionarProduto} from './exporfuncoes.js';
const prompt = promptSync();

let produto = ['bermuda', 'camisa', 'calca', 'tenis', 'bone']
let valor = [12.00, 25.00, 50.00, 150.00, 30.00]
let quantidade = [10, 20, 15, 5, 8]
let cadastro = 0

let estoque = prompt('Deseja adicionar um produto ao estoque? ').toLocaleLowerCase()
    if(estoque === 'sim'){
for(let i = 0 ;cadastro < 2; i++){
    let nomeProduto = prompt('Qual o nome do produto? ').toLocaleLowerCase()
    adicioproduto(produto, nomeProduto)
    let valorProduto = Number(prompt('Qual o valor do produto? '))
    adcionaValor(valor, valorProduto)
    let quantProduto = Number(prompt('Qual a quantidade do produto? '))
    adcionaQuant(quantidade, quantProduto)

    cadastro++
}  

listaEstoque(produto, quantidade, valor)

console.log (consultaEstoque(produto, 'calca'))

} 
console.log(`Produtos: ${produto.length}`)
console.log(`Valor: ${valor.length}`)
console.log(`Quantidade: ${quantidade.length}`)
// console.log(`Produtos: ${produto[i]}`)
// console.log(`Valor: ${valor[i]}`)
// console.log(`Quantidade: ${quantidade[i]}`)