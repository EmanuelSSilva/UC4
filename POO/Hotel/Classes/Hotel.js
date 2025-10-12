import PromptSync from "prompt-sync";
import {Quarto} from "./Quarto.js";
import {Reserva} from "./Reserva.js";
//import {QuartoOcupadoError} from "./errors/QuartoOcupadoError.js";
//import {DataInvalidaError} from "./errors/DataInvalidaError.js";

const prompt = PromptSync();

export class Hotel {
    constructor(nome, quartos = [], reservas = []) {
        this.nome = nome;
        this.quartos = [];
        this.reservas = [];
    }

    adicionarQuarto(numero, tipoQuarto) {
        const existente = this.quartos.find(q => q.numero === numero);
        if (existente) {
            console.log(`O quarto ${numero} já existe no hotel.`);
            return;
        }
        this.quartos.push(new Quarto(numero, tipoQuarto));
        console.log(`Quarto ${numero} (${tipoQuarto}) adicionado com sucesso.`);
    }

    reservarQuarto(numero, dataReserva, cliente) {
        const quarto = this.quartos.find(q => q.numero === numero);
        if (!quarto) {
            console.log("Quarto não encontrado!");
            return;
        }

        const data = new Date(dataReserva);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (data < hoje) {
            throw new DataInvalidaError(dataReserva);
        }

        const reservaExistente = this.reservas.find(
            r => r.quarto.numero === numero && r.dataReserva.toDateString() === data.toDateString()
        );

        if (reservaExistente) {
            throw new QuartoOcupadoError(numero);
        }

        const novaReserva = new Reserva(quarto, data, cliente);
        this.reservas.push(novaReserva);
        console.log(`Reserva realizada com sucesso para o quarto ${numero} em .`);
        return novaReserva;
    }

    cancelarReserva(numero, dataReserva, cpfCliente) {
        const data = new Date(dataReserva);
        const index = this.reservas.findIndex(
            r =>
                r.quarto.numero === numero &&
                r.dataReserva.toDateString() === data.toDateString() &&
                r.cliente.cpf === cpfCliente
        );

        if (index >= 0) {
            this.reservas.splice(index, 1);
            console.log(`Reserva do quarto ${numero} cancelada com sucesso.`);
        } else {
            console.log("Reserva não encontrada.");
        }
    }

    listarQuartosDisponiveis(dataReserva) {
        const data = new Date(dataReserva);
        const ocupados = this.reservas
            .filter(r => r.dataReserva.toDateString() === data.toDateString())
            .map(r => r.quarto.numero);

        const disponiveis = this.quartos.filter(q => !ocupados.includes(q.numero));
        if (disponiveis.length === 0) {
            console.log("Nenhum quarto disponível nesta data.");
        } else {
            console.log("\nQuartos disponíveis:");
            disponiveis.forEach(q => console.log(`- Quarto ${q.numero} (${q.tipoQuarto})`));
        }
    }

    listarReservas() {
        if (this.reservas.length === 0) {
            console.log("Nenhuma reserva cadastrada.");
        } else {
            console.log("\nReservas cadastradas:");
            this.reservas.forEach(r => {
                console.log(
                    `- Quarto ${r.quarto.numero} | Cliente: ${r.cliente.nome} | Data: ${r.dataReserva.toLocaleDateString()}`
                );
            });
        }
    }

    informacoesReserva() {
        if (this.reservas.length === 0) {
            console.log("Nenhuma reserva para mostrar.");
        } else {
            console.log("\n=== Informações das Reservas ===");
            this.reservas.forEach(r => {
                console.log(`-----------------------------`);
                console.log(`Cliente: ${r.cliente.nome}`);
                console.log(`CPF: ${r.cliente.cpf}`);
                console.log(`Contato: ${r.cliente.contato}`);
                console.log(`Quarto: ${r.quarto.numero} (${r.quarto.tipoQuarto})`);
                console.log(`Data da Reserva: ${r.dataReserva.toLocaleDateString()}`);
            });
            console.log(`-----------------------------`);
        }
    }
}

