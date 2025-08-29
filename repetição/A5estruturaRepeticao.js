import PromptSync from "prompt-sync"
const prompt = PromptSync()

let aumento = 1.5
let salario = 510
let salarioAtual = salario

for (let i = 2011; i <= 2025; i++) {

    if (i > 2010) {
    
        salarioAtual += salarioAtual * (aumento / 100)
        aumento += 1.5
    }

    let totalExibido = aumento - (i > 2010 ? 1.5 : 0)

    console.log('-----------------------------');
    console.log(`ano: ${i}`)
    console.log(salarioAtual.toFixed(2))
    console.log(`Percentual de aumento ${totalExibido.toFixed(2)}%`)
}
console.log('-----------------------------');