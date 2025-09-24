import PromptSync from "prompt-sync"
import {ContaBancaria } from "./documento.js"
const prompt = PromptSync() 


const novoCliente = new ContaBancaria ("Emanuel", 12345678-9, 1234 , 24092025)
novoCliente.ImpressaoInformacao()

novoCliente.operacao()