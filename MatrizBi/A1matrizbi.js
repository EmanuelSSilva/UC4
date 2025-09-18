import promptSync from 'prompt-sync'
const prompt = promptSync()

let cardapio = []

let linha = Number(prompt("Digite o número de linhas da matriz: "))
let coluna = Number(prompt("Digite o número de colunas da matriz: "))

for (let i = 0; i <=
     linha; i++) {
    cardapio[i] = []
    for (let j = 0; j <= coluna; j++) {
        cardapio[i][j] = prompt(`Digite o item para a posição [${i}][${j}]: `)
    }
}

console.log(Cardápio)