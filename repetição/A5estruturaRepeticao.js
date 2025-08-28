import PromptSync from "prompt-sync"
const prompt = PromptSync()

const aumentoInicial = 0.015
const salario = 510
let salarioAtual = salario
//let ano 
//let proxAno = aumento * ano + ano

// console.log("Ano 1: R$ " + ano.toFixed(2))
// console.log("Ano 2: R$ " + proxAno.toFixed(2))

for (let ano = 2; ano <= 14; ano++) {

    let aumento = aumentoInicial * (2** - (ano -1)) 
    salarioAtual += salarioAtual * aumento

    
   //console.log(ano.toFixed(2))
    console.log(salarioAtual.toFixed(2))
    //console.log(proxAno.toFixed(2))
    console.log(aumento.toFixed(2))
    //console.log(`${i} \ R$ ${total.toFixed(2)}`)
 
    
}