import PromptSync from "prompt-sync"
const prompt = PromptSync()



export class Cliente {
    #cpf
    #contato
    constructor(cpf, nome, contato) {
        this.#cpf = cpf;
        this.nome = nome;
        this.#contato = contato;
    }


    set cpf(novoCpf) {
        this.#cpf = (novoCpf)
    }   

    get cpf() {
        return this.#cpf
    }

    set contato(novoContato) {
        this.#contato = (novoContato)
    }       
    get contato() {
        return this.#contato
    }

}