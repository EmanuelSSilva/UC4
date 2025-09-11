import promptSync from 'prompt-sync';
//import {adicionarProduto} from './exporfuncoes.js';
const prompt = promptSync();

let produto = []
let total = 3
let quantidade = 3

// while (true) {
//     let nome = Number(prompt('Informe o nome do produto: '))
//     if(nome > quantidade){
//         total = total + nome
//         quantidade++
// }
// }

while (true) {
    
    console.log("======== Adicionando Produtos ========")
    while (true) {
        let nome =prompt("Informe o nome do produto (sair para finalizar): ")
        if (nome.toLowerCase() === 'sair') break
        let preco = Number(prompt("Informe o preço da mercadoria (0 para finalizar): "))
        if (preco === 0) break
        quantidade = prompt("Informe a quantidade do produto: ")
        if (quantidade === 0) break

        if (nome || preco > 0 || quantidade > 0) {
            produto.push({ nome, preco, quantidade })
            // total = total 
            // quantidade++
        } else {
            console.log("Preço inválido. Tente novamente.")
        }
    }
}
console.log(`Total da compra: R$ ${total.toFixed(2)}`)
console.log(`Quantidade de produtos: ${quantidade}`)
