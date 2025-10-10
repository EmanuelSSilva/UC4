import PromptSync from "prompt-sync"
const prompt = PromptSync()

expo class Reserva {
    constructor(quarto, dataReserva, cliente) {
        this.quarto = quarto;
        this.dataReserva = new Date(dataReserva);
        this.cliente = cliente;
    }
}

