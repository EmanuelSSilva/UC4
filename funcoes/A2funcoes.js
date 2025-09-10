import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('Ola bem vindo ao seu banco .')
let saldo = 500
let operacao = prompt('Qual operaçao deseja realizar nesse momento: Saldo, Deposito ou Saque? ').toLocaleLowerCase()

function visuaSaque(n1){
  if (n1 === 'saldo' ){
    console.log(`Seu saldo é: R$ ${saldo}`)
  }else if (n1 === 'deposito'){
    let deposita = Number(prompt('Informe o valor a ser depositado'))
    if(deposita <= 0 || isNaN(deposita)) {
        console.log('O valor é invalido para deposito')
    } else {
        saldo = saldo + deposita
        console.log(`Depósito realizado, seu Saldo é: R$ ${saldo}`)
    } 
   } else if (n1 === 'saque'){
     let quantia = Number(prompt('Qual o valor que deseja retira?'))
     if (quantia > saldo){
         console.log('saldo insuficiente para retirar')
      }else if(quantia <= 0 || isNaN(quantia)){
            console.log('O valor é invalido')
      }else{
            saldo = saldo - quantia
            console.log (`Saque realizado, seu Saldo é: R$ ${saldo}`)
      } 
    }else {
     console.log('Operação desconhecida, tente novamente.');
      }
    
    }
    
       visuaSaque(operacao)
    



        
        
      
