import PromptSync from "prompt-sync" 
const prompt = PromptSync() 



const valorUnitario = 6.99

for (let i = 1; i <= 50; i++) {

    let total = i * valorUnitario

    console.log(`${i} \ R$ ${total.toFixed(2)}`)
    

}