import PromptSync from "prompt-sync" 
const prompt = PromptSync() 



let termos = Number (prompt("Quantos termos da sequencia de Fibonacci deseja ver? "))
let n1 = 0, n2 = 1, proximoTermo

if (isNaN(termos) || termos <= 0) {
    console.log("Por favor, digite um número positivo maior que zero.")
} else if (termos === 1) {
    console.log("Sequência de Fibonacci com 1 termo:")
    console.log(n1)
}for (let i = 1; i <= termos; i++) {
    console.log(n1)
    proximoTermo = n1 + n2
    n1 = n2
    n2 = proximoTermo
}
console.log(`sequência de Fibonacci com ${termos} termos.`)