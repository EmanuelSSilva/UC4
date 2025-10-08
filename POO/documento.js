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
        
        if (this.#saldo < valor ){
            throw new ErroDeBanco ('Erro!!! Saldo insifuciente para retirada')
        }
        if (valor <= 0 || isNaN(valor)){
            throw new ErroDeBanco ('Erro!!! O valor é invalido')
        }
        else{
            this.#saldo = this.#saldo - valor
            console.log(`Saque realizado com sucesso, seu saldo é ${this.#saldo} `)
        }
        
    }

    deposito ( valor){
        
        if (valor <= 0 || isNaN(valor))
            throw new ErroDeBanco (' Erro !!! valor é invalido')
        else{
            this.#saldo = this.#saldo + valor
            console.log(`Deposito realizado com sucesso! Seu novo saldo é: ${this.#saldo}`)
        }
    }
    extrato (){
       console.log(`Seu saldo é ${this.#saldo}`)
    }
    
    rendimento (){
        if( this.#saldo <= 0 ){
            throw new ErroDeBanco (' Erro !!! O valor não teve redimento, a conta nao tem saldo positivo!')
        }else{
            valor = this.#saldo * 0.10
            console.log(`Seu rendimento é 10% sobre seu saldo atual e ao mês sera: ${valor}`)
    }
    }

   

    ImpressaoInformacao (){
        console.log(`Ola ${this.nome} sua conta é ${this.numConta} e agência ${this.numAgencia} , a data de abetrura foi ${this.dataAbertura}\nO saldo da sua conta é: ${this.#saldo}`)
    }

    operacao (){
        while (true){
        let resposta = prompt("1  para depositar \n2  para sacar \n3  para extrato \n0  para sair digite \n4  para visualizar o rendimento    ")
    if( resposta == "0"){break}    
    if(resposta == "1"){
        let valor = Number(prompt("Informe o valor que deseja depositar: "))
        this.deposito(valor)
    }else if(resposta == "2"){
        let valor = Number(prompt("Informe o valor que deseja sacar"))
        this.saque(valor)
    }else if(resposta == "3"){
        this.extrato()

    }else if(resposta == "4"){
        this.rendimento()
        this.extrato()
    }else{
        console.log("Opção invalida")
    }
     
    }
    
    }

    
}

export class ErroDeBanco extends Error {
    constructor(message ){
        super (message)

        }
}
