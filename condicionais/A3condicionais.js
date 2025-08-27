import promptSync from 'prompt-sync'
const prompt = promptSync()


let valorCom = Number(prompt("Informe o valor da sua compra:"));
let desco 
let valorfinal 
let bonus = 300

 if (valorCom <= 100){
    console.log(`O valor ${valorCom} nao tem desconto!`)

}if (valorCom >= 101 && valorCom <= 500){
    desco = valorCom * 0.05
    valorfinal = valorCom - desco
    console.log(`O valor do desconto é: ${desco.toFixed(2)} e sua compra é:${valorfinal}`)

}else{
    desco = valorCom * 0.10
    valorfinal = valorCom - desco
    console.log(`O valor do desconto é: ${desco.toFixed(2)} e sua compra é:${valorfinal}`)

}if (valorCom >= bonus){
    console.log('você ganhou um cupom de Bônus para usar na próxima compra!')
}