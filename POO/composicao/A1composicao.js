import PromptSync from "prompt-sync"
import { Memoria } from "./Import.js"
import { Processador } from "./Import.js"
import { Armazenamento } from "./Import.js"
import { Tela } from "./Import.js"
import { Computador } from "./Import.js"
const prompt = PromptSync()

let novmemoria = new Memoria ("DDR4", "3200", 64)
//novmemoria.usarMemoria()
novmemoria.liberarMemoria()
let noProcess =  new Processador( "Intel" , "I7", 20, 2.80)
noProcess.executarPrograma()
let hd = new Armazenamento ( "SATA", 1.024, 250)
hd.espacoLvre()
let telanova = new Tela (22, "1.920 por 1.080 pixels" )
telanova.ligar()

let novops = new Computador()
novops.memoria = novmemoria
novops.processador = noProcess 
novops.armazenamento = hd
novops.tela = telanova
novops.instalarSoftware()
novops.fichaTecnica()