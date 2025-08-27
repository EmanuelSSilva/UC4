import promptSync from 'prompt-sync'
const prompt = promptSync()


let consumoKWh = Number(prompt("Informe o consumo em KWh:"));
let atraso = prompt("O pagamento está atrasado? (s/n)")


let valorBase 
//let pagamentoAtrasado 
//let valorFinal

if (consumoKWh <= 100) {
  
  valorBase = consumoKWh * 1.2
  console.log(`Seu consumo foi de ${valorBase}`)
  
} else {  
    valorBase = consumoKWh * 1.7
    console.log(`Seu consumo foi de ${valorBase}`)

}if (atraso.toLowerCase() === 's'){

  valorBase *= 1.05
   
}
  console.log(`O valor final da conta de luz é: R$ ${valorBase.toFixed(2)}`)

 
 





