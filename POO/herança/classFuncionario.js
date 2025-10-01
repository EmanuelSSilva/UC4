import PromptSync from "prompt-sync"
import {Pessoa} from "./classPessoa.js"
const prompt = PromptSync()


export class Funcionario extends Pessoa  {
    #salario
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula){
    super(nome, cpf, data_nascimento)

        this.cargo = cargo
        this.#salario = salario
        this.matricula = matricula  

     }

     set salario (novsalario){
        this.#salario = novsalario
     }
     get salario (){
        return this.#salario
     }

     calculaHorasExtras(){
        let quantHora
        let valorHora 
        let resulHora
        this.#salario = Number(prompt(`Informe seu salario: `))
        let horas = prompt(`Você fez hora extra? S ou N: `).toLocaleLowerCase()
                
        if ( horas === "s"){
            quantHora = Number(prompt(`Quantas horas você trabalhou?: `))
            valorHora = Number(prompt(`Informe o valor da sua hora trabalhada: `))
            resulHora = quantHora * valorHora
            this.#salario += resulHora 
            console.log(`Suas hora Trabalhada foi ${quantHora} e o valor das suas horas trabalhadas é ${valorHora}, tolalizando no valor de ${resulHora}. adicionado ao seu salario : ${this.#salario}`)
            
        }else{

            console.log(`Você não fez hora extra e seu salario ${this.#salario}, não tem adicionais.`)
        }
        
        }
        informacoesFuncionario(){
         super.mostrarInformacoes()
         console.log(`Seu salario é ${this.#salario} o cargo trabalhado é: ${this.cargo} sua matricula é: ${this.matricula}`)
     }

    }
      //   const funcio2 = new Funcionario (prompt (`Informe seu nome: `) , prompt(`Informe seu CPF: `), prompt (`Informe sua data de nascimento: `),prompt (`Informe seu salario: `), prompt(`Informe seu Cargo: `), prompt(`Informe sua matricula: `))
        
      //     //funcio2.calculaHorasExtras()
        
      //   funcio2.informacoesFuncionario()

    



