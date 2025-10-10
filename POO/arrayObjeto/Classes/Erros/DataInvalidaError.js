import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class DataInvalidaError extends Error {
    constructor(data) {
        super(`A data ${data} é inválida para reserva.`);
        this.name = "DataInvalidaError";
    }
}

