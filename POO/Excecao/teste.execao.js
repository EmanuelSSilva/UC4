import PromptSync from "prompt-sync"
const prompt = PromptSync()


class TesteErro extends Erro{
    constructor(message = ''){
        super(message)
    //     this.qtdeCtr = 'Quantidade de caracteres insuficiente!'
    //     this.ehNum = 'Precisa ser numeros!'
    // 
    }
}

function validandoCpf (cpf){
  if(isNaN(Number(cpf)) ){
        throw new TesteErro('Error! Precisa ser números!')
    }
    if(cpf.length !== 11){
        throw new TesteErro('Error! Quantidade de caracteres insuficiente!')
    }
    return cpf
}

try{
    let cpf = validandoCpf(prompt('Digite o cpf:'))
    console.log(`${cpf} - validado!`)
}catch(error){
    console.Erro(error.message)
}

