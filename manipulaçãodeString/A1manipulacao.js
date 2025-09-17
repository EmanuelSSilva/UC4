import promptSync from 'prompt-sync'
const prompt = promptSync()

let player1 = prompt("Digite o nome do Player1: ");
let player2 = prompt("Digite o nome do Player2: ");

let i = 1

let result1 = 0
let result2 = 0

while(i <= 3){
    prompt(`Aperte o enter ${player1}para jogar o dado: `)
    let dado1 = Math.trunc((Math.random() * 6)+1)
    console.log(`Numero do dado: ${dado1}`)
    result1 = result1 + dado1
    prompt(`Aperte o enter ${player2} para jogar o dado: `)
    let dado2 = Math.trunc((Math.random() * 6)+1)
    console.log(`Numero do dado: ${dado2}`) 
    result2 = result2 + dado2
    
    i++ 
}
    
    console.log(`Player1 ${result1}`)
    console.log(`Player2 ${result2}`)

    if(result1 > result2){
        console.log(`O vencedor é o ${player1}`);
    }else if(result2 > result1){
        console.log(`O vencedor é o ${player2}`);
    }else{
        console.log("Empate");
    }