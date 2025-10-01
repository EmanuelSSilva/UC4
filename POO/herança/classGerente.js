import PromptSync from "prompt-sync"
import {Funcionario} from "./classFuncionario.js"
const prompt = PromptSync()

class Gerente extends Funcionario {
    
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadedeEquipe){
        super(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadedeEquipe)
        this.setor = setor
        this.quantidadedeEquipe =  quantidadedeEquipe

    }


    calculaBonificacao (){
        let bonus = 0.15
        let bonus1 = 0.07
        let bonPorcen
        this.salario = Number(prompt(`Infome seu salario: `))
        let qta = Number(prompt (`Informe o numero da quantidade da sua equipe: `))
        if (qta >= 10 ){
            bonPorcen = this.salario * bonus
            this.salario = this.salario + bonPorcen
            console.log(`Seu salario tem um adicional de 15% que sera de ${bonPorcen} mais o salario ficara ${this.salario} `)
        }else{
            bonPorcen = this.salario * bonus1
            this.salario = this.salario + bonPorcen
            console.log(`Seu salario tem um adicional de 7% que sera: ${bonPorcen} mais o salario ficara ${this.salario} `)
        }
    }

}

