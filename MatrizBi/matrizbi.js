import promptSync from 'prompt-sync'
const prompt = promptSync()

let cardapio = [["segunda"], ["terça"], ["quarta"], ["quinta"], ["sexta"], ["sabado"], ["domingo"]]


for (let i = 0; i < cardapio.length; i++) {
    for (let j = 1; j < 4; j++) {
        cardapio[i][j] = prompt(`Digite o item para a posição [${cardapio[i][0]}] `)
        
    }
}

console.table(cardapio)

let busca = prompt("Digite o dia da semana que deseja verificar: ")
 if(busca == "segunda" || busca == "terca" || busca == "quarta" || busca == "quinta" || busca == "sexta" || busca == "sabado" || busca == "domingo"){
    for (let i = 0; i < cardapio.length; i++) {
        if(busca == cardapio[i][0]){
            console.log(`O cardapio de ${busca} são: Cafe da manha: ${cardapio[i][1]}, Almoço: ${cardapio[i][2]} e Janta ${cardapio[i][3]}`)
        }
    }

 }
