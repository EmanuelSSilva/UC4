import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Memoria {
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
     let qtd = Number(prompt(`Porfavor informe quanto em uso esta a sua memoria: `))
        if (qtd > this.#capacidade){
          console.log("Sua memoria esta com a capacidade no limite")
            qtd = Number(prompt(`Porfavor informe a quantidade que deseja liberar de sua memoria: `))
            this.#capacidade -= qtd
            console.log(`O espaço liberado na memoria foi ${this.#capacidade}: `)
        }else{
            console.log("A memoria esta com sua capacidade no estado normal: ")
        }
    }

    liberarMemoria ( ){
    let qtd = Number(prompt(`Porfavor informe a quantidade de sua memoria para liberar espaço: `))
        if(qtd < this.#capacidade){
            let result = this.#capacidade - qtd
            console.log(`Sua memoria esta com o espaço de: ${result}`)
        }else{console.log(`O valor tem que ser a baixo da capacidade: ${this.capacidade}`)}
}
}
export class Processador {
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor (marca, modelo, nucleo, velocidade){
        
    this.#marca = marca
    this.#modelo = modelo
    this.#nucleo = nucleo
    this.#velocidade = velocidade
    }   

    set marca (novaMarca){
    this.#marca = novaMarca
    }
    get marca () {
    return this.#marca
    } 
    set modelo (novoModelo){
    this.#modelo = novoModelo
    }
    get modelo () {
    return this.#modelo 
    } 
    set nucleo (novoNucleo){
    this.#nucleo = novoNucleo
    }
    get nucleo () {
    return this.#nucleo
    } 
    set velocidade (novaVelocidade){
    this.#velocidade = novaVelocidade
    }
    get velocidade () {
    return this.#velocidade
    } 

    executarPrograma (){
    let windows
        console.log(`Seu windows esta sendo executado`)
    }
}

export class Armazenamento {
    #tipo
    #capacidade
    #espaco_Utilizado
    constructor(tipo, capacidade, espaco_Utilizado){
    this.#tipo = tipo
    this.#capacidade = capacidade
    this.#espaco_Utilizado  = espaco_Utilizado

    }
    set tipo (novoTipo){
    this.#tipo = novoTipo
    }
    get tipo () {
    return this.#tipo
    }
    set capacidade (novaCapacidade){
    this.#capacidade = novaCapacidade
    }
    get capacidade () {
    return this.#capacidade
    }
    set espaco_Utilizado (novoEspaco){
    this.#espaco_Utilizado = novoEspaco
    }
    get espaco_Utilizado () {
    return this.#espaco_Utilizado
    }

    espacoLvre (){
        let resulta = this.#capacidade - this.#espaco_Utilizado
        console.log(`O espaço disponivel no disco rigido é: ${this.capacidade}`)
    }

}

export class Tela {
    #tamanho
    #resolucao
    constructor(tamanho, resolucao){
    this.#tamanho = tamanho
    this.#resolucao = resolucao
}
set tamanho (novaTela){
    this.#tamanho = novaTela
}
get tamanho(){
    return this.#tamanho
}
set resolucao (novaResolucao){
    this.#resolucao = novaResolucao
}
get resolucao(){
    return this.#resolucao
}


ligar (){
    console.log("Monito ligado")
}
desligar (){
    console.log("Monito deligado")
}


}

export class Computador {
    #marca
    #modelo
    constructor(marca, modelo, memoria, processador, armazenamento, tela){

        this.#marca = marca
        this.#modelo = modelo
        this.memoria = memoria
        this.processador = processador
        this.armazenamento = armazenamento
        this.tela = tela
    }

    set marca (novaMarcaPc){
        this.#marca = novaMarcaPc
    }
    get marca (){
        return this.#marca
    }
    set modelo (novoModeloPc){
        this.#modelo = novoModeloPc
    }
    get modelo (){
        return this.#modelo
    }
    
    fichaTecnica (){
        let dados = prompt(`Informe a marca do computado: `)
        let dad = prompt(`Informe o modelo:  `)
        console.log(`A marca do computador é ${dados} de modelo ${dad}, contendo memoria de ${this.memoria.capacidade}, seu processador é: ${this.processador.marca}, Armazenamento de ${this.armazenamento.capacidade} e tela de ${this.tela.tamanho}" polegadas e de resolução ${this.tela.resolucao}`)
    }

    instalarSoftware(){
        let arreysoft = [] 
        let encerra = prompt(`Se deseja que o computador não va com sistema digite 0. `)
        if (encerra !== "0" ){
            let adciona  = Number(prompt(`Informe quantos Software voce deseja instalar: `))
               for (let i = 0 ; i < adciona ; i ++ ){
                arreysoft.push(prompt("Qual soft vc deseja no seu computador: "))
            }
            console.log(`Os sistemas que vão instalados são: ${arreysoft}`)
            
        }else{
            console.log("O seu computador sera entregue sem sistema. ")
        }
    }
}   