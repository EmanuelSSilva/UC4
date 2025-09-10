import promptSync from 'prompt-sync';
const prompt = promptSync();


export  function calculaCaloria(n1, n2){
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