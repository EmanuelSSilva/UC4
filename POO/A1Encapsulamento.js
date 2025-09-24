import PromptSync from "prompt-sync"
import { Cliente } from "./documento.js"
const prompt = PromptSync()



const cliente1 = new Cliente (prompt ("Digite o novo nome do cliente1: "),prompt ("Digite o novo endereço: "),prompt ("Digite a nova renda: "))
const cliente2 = new Cliente (prompt ("Digite o novo nome do cliente2: "),prompt ("Digite o novo endereço: "),prompt ("Digite a nova renda: "))

cliente1.imprimirInformacoes()
cliente2.imprimirInformacoes()
