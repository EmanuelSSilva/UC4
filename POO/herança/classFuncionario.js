import PromptSync from "prompt-sync"
const prompt = PromptSync()


class Funcionario {
    #salario
    constructor(cargo, salario, matricula){
    //super(nome, cpf, data_nascimento)

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
            
        }
        //console.log(`Nome ${this.nome}, CPF: ${this.#cpf}, data de nascimento: ${this.data_nascimento}`)
     }
    }
        const funcio2 = new Funcionario

        funcio2.calculaHorasExtras()


    



