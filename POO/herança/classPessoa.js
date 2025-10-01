import PromptSync from "prompt-sync"
const prompt = PromptSync()


export class Pessoa {
    #cpf
     constructor(nome, cpf, data_nascimento){
        this.nome = nome
        this.#cpf = cpf
        this.data_nascimento = data_nascimento    

     }

     set cpf (novCpf){
        this.#cpf = novCpf
     }
     get cpf (){
        return this.#cpf
     }

     mostrarInformacoes(){
        console.log(`Nome: ${this.nome}, CPF: ${this.#cpf}, data de nascimento: ${this.data_nascimento}`)
     }


}