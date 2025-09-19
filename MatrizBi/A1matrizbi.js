import promptSync from 'prompt-sync'
const prompt = promptSync()


let cardapio = []

let dias = Number(prompt("Digite o dia da semana: "))
let refeicoes = Number(prompt("Digite o tipo do alimento a ser atribuido: "))

for (let i = 0; i <=  dias; i++) {
    cardapio[i] = []
    for (let j = 0; j <= refeicoes; j++) {
        cardapio[i][j] = prompt(`Digite o item para a posição [${i}][${j}]: `)
    }
}

console.table(cardapio)