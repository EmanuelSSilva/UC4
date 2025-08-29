import PromptSync from "prompt-sync"
const prompt = PromptSync()

let dias = 0
let total = 0
let conta = 1 

let numero = Number(prompt("informe seu salario: "));

while (true) {
    
    if(conta > 30){
        break
    }
     console.log("=== Gastos diarios ===")

    while(conta <= 30) {

    let gastos = Number(prompt(`Informe os gastos no dia ${conta}: `))
    conta++
    if (gastos > 0) {
        total = total + gastos
        dias++

    }if (dias === 0) {
        console.log("Voce nao informou nehum gasto ao dia.")
        continue
}   
    if(conta > 30){
        console.log(`O total em dia que foi gasto é: ${total}`)
        break

    }
    
}
}