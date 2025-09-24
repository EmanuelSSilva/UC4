import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Cliente {
    #nome
    #endereco
    #renda
    constructor (nome, endereco, renda){
        this.#nome = nome 
        this.#endereco =  endereco  
        this.#renda =  renda

    }


set nome (novoNome){
    this.#nome = novoNome
}
get nome () {
    return this.#nome
}
set endereco (novoEndereco) {
    this.#endereco = novoEndereco
}   
get endereco () {
    return this.#endereco
}
set renda (novaRenda) {
    this.#renda = novaRenda
}       
get renda (){
    return this.#renda
}

imprimirInformacoes (){
    console.log (`O nome do cliente é ${this.nome} e seu endereço é ${this.endereco}, com uma renda de R$${this.renda}`)
}
}


export class ContaBancaria{
    #nome
    #saldo
    constructor (nome, numConta, numAgencia, dataAbertura, saldo, ){
        this.#nome = nome 
        this.numConta = numConta
        this.numAgencia = numAgencia
        this.dataAbertura = dataAbertura
        this.#saldo = 0.00
    }

    set nome (novoNome){
        this.#nome = novoNome
    }

    get nome (){
        return this.#nome 
    }

    set saldo (novoSaldo){
        this.#saldo = novoSaldo
    }

    get saldo (){
        return this.#saldo
    }

     saque (valor) {
        valor = Number(prompt("Informe o valor que deseja sacar"))
        if (this.#saldo < valor )
            console.log("Saldo insifuciente para retirada")
        else if (valor <= 0 || isNaN(valor))
            console.log("O valor é invalido")
        else{
            this.#saldo = this.#saldo - valor
            console.log(`Saque realizado com sucesso, seu saldo é ${this.#saldo} `)
        }
        
    }

    deposito ( valor){
        valor = Number(prompt("Informe o valor que deseja depositar: "))
        if (valor <= 0 || isNaN(valor))
            console.log("valor é invalido")
        else{
            this.#saldo = this.#saldo + valor
            console.log(`Deposito realizado com sucesso! Seu novo saldo é: ${this.#saldo}`)
        }
    }

    rendimento (){
        this.#saldo = this.#saldo * 0.10
    }

    saldoComRendimento (){
        (`O seu saldo com redimento de 10% é: ${this.#saldo}`)
    }

    extrato (){
        console.log(`Seu saldo é ${this.#saldo}`)
    }

    ImpressaoInformacao (){
        console.log(`Ola ${this.nome} sua conta é ${this.numConta} e agência ${this.numAgencia} , a data de abetrura foi ${this.dataAbertura}\nO saldo da sua conta é: ${this.#saldo}`)
    }

    operacao (){
        let resposta = prompt("Digite 1 para depositar ou 0 para sacar ou 2 para extrato ou para sair digite 3 ")
    while (true){
    if( resposta == "3"){break}    
    if(resposta == "1"){
        valor.deposito()
    }else if(resposta == "0"){
        valor.saque()
    }else if(resposta == "2"){
        valor.extrato()
    }else{
        console.log("Opção invalida")
    }
     resposta++
    }
    }

    
}


