import promptSync from 'prompt-sync';
import { deposit, saque } from './exporfuncoes.js';
const prompt = promptSync();

console.log('Ola bem vindo ao seu banco .')
let saldo = 500
let operacao = prompt('Qual operaçao deseja realizar nesse momento: Saldo, Deposito ou Saque? ').toLocaleLowerCase()

  if (operacao === 'saldo' ){
    console.log(`Seu saldo é: R$ ${saldo}`)
  }else if (operacao === 'deposito'){
    let deposita = Number(prompt('Informe o valor a ser depositado'))
    deposit(saldo, deposita)
   } 
   else if (operacao === 'saque'){
     let quantia = Number(prompt('Qual o valor que deseja retira?'))
    
    saque(saldo, quantia)
  }else {
     console.log('Operação desconhecida, tente novamente.');
      }
    

    



        
        
      
