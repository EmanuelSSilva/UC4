import PromptSync from "prompt-sync";
import {Cliente} from "./classes/Cliente.js";
import {Hotel} from "./classes/Hotel.js";

const prompt = PromptSync();
const hotel = new Hotel("Hotel Paraíso");

function menuPrincipal() {
    console.log("\n=== SISTEMA DE RESERVAS DO HOTEL ===");
    console.log("1 - Atendente");
    console.log("2 - Cliente");
    console.log("0 - Sair");
    return prompt("Escolha uma opção: ");
}

function menuAtendente() {
    console.log("\n=== MENU DO ATENDENTE ===");
    console.log("1 - Adicionar quarto");
    console.log("2 - Listar quartos disponíveis");
    console.log("3 - Listar todas as reservas");
    console.log("4 - Cancelar reserva");
    console.log("0 - Voltar");
    return prompt("Escolha uma opção: ");
}

function menuCliente() {
    console.log("\n=== MENU DO CLIENTE ===");
    console.log("1 - Reservar quarto");
    console.log("2 - Cancelar reserva");
    console.log("3 - Listar quartos disponíveis");
    console.log("4 - Ver informações das reservas");
    console.log("0 - Voltar");
    return prompt("Escolha uma opção: ");
}

// ======================= PROGRAMA PRINCIPAL =======================
while (true) {
    const opcao = menuPrincipal();
    if (opcao === "0") break;

    switch (opcao) {
        case "1": // Atendente
            while (true) {
                const opc = menuAtendente();
                if (opc === "0") break;

                switch (opc) {
                    case "1":
                        const num = prompt("Número do quarto: ");
                        const tipo = prompt("Tipo do quarto (simples, duplo, suíte): ");
                        hotel.adicionarQuarto(num, tipo);
                        break;

                    case "2":
                        const data = prompt("Data (YYYY-MM-DD): ");
                        hotel.listarQuartosDisponiveis(data);
                        break;

                    case "3":
                        hotel.listarReservas();
                        break;

                    case "4":
                        const numC = prompt("Número do quarto: ");
                        const dataC = prompt("Data da reserva (YYYY-MM-DD): ");
                        const cpfC = prompt("CPF do cliente: ");
                        hotel.cancelarReserva(numC, dataC, cpfC);
                        break;

                    default:
                        console.log("Opção inválida!");
                }
            }
            break;

        case "2": // Cliente
            while (true) {
                const opc = menuCliente();
                if (opc === "0") break;

                try {
                    switch (opc) {
                        case "1":
                            const cpf = prompt("CPF: ");
                            const nome = prompt("Nome: ");
                            const contato = prompt("Contato: ");
                            const cliente = new Cliente(cpf, nome, contato);
                            const numero = prompt("Número do quarto: ");
                            const dataReserva = prompt("Data da reserva (YYYY-MM-DD): ");
                            const reserva = hotel.reservarQuarto(numero, dataReserva, cliente);
                            if (reserva) {
                                console.log("=== Informações da Reserva ===");
                                console.log(`Cliente: ${cliente.nome}`);
                                console.log(`Quarto: ${numero}`);
                                console.log(`Data: ${dataReserva}`);
                            }
                            break;

                        case "2":
                            const numCan = prompt("Número do quarto: ");
                            const dataCan = prompt("Data da reserva (YYYY-MM-DD): ");
                            const cpfCan = prompt("CPF: ");
                            hotel.cancelarReserva(numCan, dataCan, cpfCan);
                            break;

                        case "3":
                            const dataDisp = prompt("Data (YYYY-MM-DD): ");
                            hotel.listarQuartosDisponiveis(dataDisp);
                            break;

                        case "4":
                            hotel.informacoesReserva();
                            break;

                        default:
                            console.log("Opção inválida!");
                    }
                } catch (err) {
                    console.error(err.message);
                }
            }
            break;

        default:
            console.log("Opção inválida!");
    }
}

console.log("Encerrando sistema...");