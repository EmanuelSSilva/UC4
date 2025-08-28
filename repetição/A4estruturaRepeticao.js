import PromptSync from "prompt-sync"
const prompt = PromptSync()


let total = 0
let quantidade = 0

while (true) {
    
    console.log("\n=== Nova compra ===")
    while (true) {
        let preco = Number(prompt("Informe o preço da mercadoria (0 para finalizar): "))
        if (preco === 0) break
        if (preco > 0) {
            total = total + preco
            quantidade++
        } else {
            console.log("Preço inválido. Tente novamente.")
        }
    }

    if (quantidade === 0) {
        console.log("Nenhum produto comprado.")
        continue
    }

    console.log(`Total da compra: R$ ${total.toFixed(2)}`)
    let pagamento = Number(prompt("Valor em dinheiro fornecido pelo cliente: R$ "))
    while (pagamento < total) {
        console.log("Valor insuficiente. Tente novamente.")
        pagamento = Number(prompt("Valor em dinheiro fornecido pelo cliente: R$ "))
    }
    let troco = pagamento - total
    console.log(`Quantidade de produtos: ${quantidade}`)
    console.log(`Valor da compra: R$ ${total.toFixed(2)}`)
    console.log(`Valor do pagamento: R$ ${pagamento.toFixed(2)}`)
    console.log(`Valor do troco: R$ ${troco.toFixed(2)}`)
    console.log("Compra finalizada. Próximo cliente!\n")

    //
}