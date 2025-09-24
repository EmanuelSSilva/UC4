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
    constructor (nome, numConta, numAgencia, saldo, dataAbertura){
        this.#nome = nome 
        this.numConta = numConta
        this.numAgencia = numAgencia
        this.#saldo = 0.00
        this.dataAbertura = dataAbertura
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
        if (this.#saldo > valor )
            console.log("Saldo insifuciente para retirada")
        else if (valor <= 0 || isNaN(valor))
            console.log("O valor é invalido")
        else{
            this.#saldo = this.#saldo - valor
            console.log(`Saque realizado com sucesso, seu saldo é ${this.#saldo} `)
        }
        
    }

    deposito ( valor){
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
        (`O seu saldo com redimento de 10% é: ${this.#saldo
        }`)
    }

    ImpressaoInformacao (){
        console.log(`Ola ${this.nome} sua conta é ${this.numConta} e agência ${this.numAgencia.} \n o saldo da sua conta é: ${this.#saldo}`)
    }



}