  function calculaCaloria(n1, n2){
    let calorias = 0
    if(n1 === 'caminhada'){
        calorias = n2* 5
    }if(n1 === 'corrida'){
        calorias = n2 * 10
    }if(n1 === 'bicicleta'){
        calorias = n2 * 8
    }
    return calorias
}

export const deposit = function (saldo, valor) {
    if(valor <= 0 || isNaN(valor)) {
        console.log('O valor é invalido para deposito')
    } else {
        saldo = saldo + valor
        console.log(`Depósito realizado, seu Saldo é: R$ ${saldo}`)
    } 
}

export const saque = (saldo, valor) => {
    if (valor > saldo){
        console.log('saldo insuficiente para retirar')
     }else if(valor <= 0 || isNaN(valor)){
           console.log('O valor é invalido')
     }else{
           saldo = saldo - valor
           console.log (`Saque realizado, seu Saldo é: R$ ${saldo}`)
     } 
  
    }


export {calculaCaloria}

export const adicioproduto = function (loja, produto){
    loja.push(produto)
    return loja
}


