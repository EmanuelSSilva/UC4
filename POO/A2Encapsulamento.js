import PromptSync from "prompt-sync"
import {ContaBancaria } from "./documento.js"
const prompt = PromptSync() 


// const novoCliente = new ContaBancaria //("Emanuel", 12345678-9, 1234 , "24/09/2025")
// novoCliente.ImpressaoInformacao()
// novoCliente.deposito(Number(prompt("Informe quanto vc deseja depositar: ")))
// novoCliente.ImpressaoInformacao()
//  novoCliente.saque(Number(prompt("Informe quanto vc deseja sacar: ")))
// novoCliente.ImpressaoInformacao()
// novoCliente.rendimento()


//novoCliente.operacao()


const novoCliente = new ContaBancaria ("Emanuel", 12345678-9, 1234 , "24/09/2025")
novoCliente.saldo = 0
try{
    novoCliente.deposito (Number(prompt("Informe quanto vc deseja depositar: "))) 
}catch(err){
    console.error(err.message)
}try{   
novoCliente.saque(Number(prompt("Informe quanto vc deseja sacar: ")))
}catch(err){
    console.error(err.message)
}