import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Memoria {
    #tipo
    #frequencia
    #capacidade
    constructor (tipo, frequencia, capacidade) {
        this.#tipo = tipo 
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    }
    
    set tipo (tipoNovo){
        this.#tipo = tipoNovo 
    }

    get tipo (){
        return this.#tipo
    }
     
    set frequencia (frequenciaNova){
        this.#frequencia = frequenciaNova
    }
      
    get frequencia (){
        return this.#frequencia
    } 
        
    set capacidade (capacidadeNova){
        this.#capacidade = capacidadeNova
    }
      
    get capacidade (){
        return this.#capacidade
    } 
        

    usarMemoria (){
     let qtd = Number(`Porfavor informe quanto em uso esta a sua memoria`)
        if (qtd > this.#capacidade){
            console.log("Sua memoria esta com a capacidade no limite")
            qtd = Number(promo(`Porfavor informe a quantidade que deseja remover de sua memoria`))
            this.#capacidade -= qtd
            console.log(`O espaço liberado na memoria foi ${this.#capacidade}`)
        }else{
            console.log("A memoria ainda esta com sua capacidade no estado normal")
        }
    }

    liberarMemoria ( ){
    let qtd = Number(`Porfavor informe a quantidade de sua memoria para liberar espaço`)
        let result = this.#capacidade - qtd
        console.log(`Sua memoria esta com o espaço de ${this.#capacidade}`)
    }

    }


class Processador {
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor (marca, modelo, nucleo, velocidade){
        
    this.#marca = marca
    this.#modelo = modelo
    this.#nucleo = nucleo
    this.#velocidade = velocidade

    executarPrograma ()
    let windows
        console.log(`Seu ${windows} esta sendo executado`)
    }
}

class Armazenamento {
    #tipo
    #capacidade
    #espaco_Utilizado
    constructor(tipo, capacidade, espaco_Utilizado){
    this.#tipo = tipo
    this.#capacidade = capacidade
    this.#espaco_Utilizado  = espaco_Utilizado

    }

    espacoLvre (){
        let resulta = this.#capacidade - this.#espaco_Utilizado
        console.log(`O espaço disponivel no disco rigido é: ${resulta}`)
    }

}

class Tela {
    #tamanho
    #resolucao
    constructor(tamanho, resolucao){
    this.#tamanho = tamanho
    this.#resolucao = resolucao
}

ligar (){
    console.log("Monito ligado")
}
desligar (){
    console.log("Monito deligado")
}


}