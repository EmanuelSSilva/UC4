import PromptSync from "prompt-sync" 
const prompt = PromptSync() 

let valor, moeda, conver, dolar = 5.424, euro = 6.353, peso = 0.0042, libra = 7.326, franco = 6.753

valor = Number (prompt("Digite o valor que deseja converte: R$"))
moeda = prompt("Digite qual moeda deseja converte => dolar, euro, peso, libra, franco: ").toLowerCase()

switch (moeda){
    case "dolar":
        conver =  valor / dolar
        console.log("O valor inserido foi R$",valor," convertando em dolá é: $",convensao.toFixed(2))
    break;

    case "euro":
        conver = valor / euro
        console.log("O valor inserido foi R$",valor," convertando em Euro é: €",convensao.toFixed(2))
    break;
    
    case "peso":
        conver = valor / peso
        console.log("O valor inserido foi R$",valor," convertando em peso é: $MN",convensao.toFixed(2))
    break;
    
    case "libra":
        conver = valor / libra
        console.log("O valor inserido foi R$",valor," convertando em libra é: £",conver.toFixed(2))
    break;

    case "franco":
        conver = valor / franco
        console.log("O valor inserido foi R$",valor," convertando em franco é: Fr",convensao.toFixed(2))
    break;    

    default:
        console.log("Moeda invalida!")
}