import PromptSync from "prompt-sync"
import { Funcionario } from "./classFuncionario.js"
const prompt = PromptSync()

class Diretor extends Funcionario{
    #participacaoLucros
    constructor (nome, cpf, data_nascimento, cargo, salario, matricula, participacaoLucros, departamento,  tempoDeDirecao){
    super(nome, cpf, data_nascimento, cargo, salario, matricula)

        this.#participacaoLucros = participacaoLucros
        this.departamento = departamento
        this.tempoDeDirecao = tempoDeDirecao

    }

    set participacaoLucros (participa){
        this.#participacaoLucros = participa
    }
    get participacaoLucros (){
        return this.#participacaoLucros
    }


    calculaGratificacao (){
        let bonifica1 = 0.30
        let bonifica2 = 0.25
        let bonifica3 = 0.20
        let bonifica4 = 0.15
        let result
        //let escolha = prompt(`O diretor esta habilitado receber a participação de lucros: SIM OU NAO `).toLowerCase()
        if (this.#participacaoLucros == "sim" ){
            //let anosDecasa = prompt(`Quantos anos de empresa você tem? `)
            if(this.tempoDeDirecao> 5){
                result = this.salario * bonifica1
                console.log(`Seu bonus em relação a o seu salario ${this.salario} é : ${result}`)
                }if (this.tempoDeDirecao >= 2 && this.tempoDeDirecao <= 5){
                result =  this.salario * bonifica2
                console.log(`Seu bonus em relação a o seu salario ${this.salario} é : ${result}`)
                    }if(this.tempoDeDirecao < 2){
                         result =  this.salario * bonifica3
                console.log(`Seu bonus em relação a o seu salario ${this.salario} é : ${result}`)
                    }
        } else {
            result =  this.salario * bonifica4
                console.log(`Seu bonus em relação a o seu salario ${this.salario} é : ${result}`)

        }    
    }
    
    


}

let diret = new Diretor (prompt(`informe nome: `), prompt(`informe cpf: `), prompt(`informe data: `), prompt(`informe cargo: `), prompt(`informe salario: `), prompt(`informe: matricula `), prompt(`informe participa do Lucro: `), prompt(`informe departamento: `), prompt(`informe tempo de trabalho: `),)
diret.calculaGratificacao()