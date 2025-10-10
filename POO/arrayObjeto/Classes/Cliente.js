import PromptSync from "prompt-sync"
const prompt = PromptSync()



export class Cliente {
    constructor(cpf, nome, contato) {
        this.cpf = cpf;
        this.nome = nome;
        this.contato = contato;
    }
}

