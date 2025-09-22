import PromptSync from "prompt-sync"
const prompt = PromptSync()


class data {
    constructor (dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    escreverData (){
        console.log(`A data Atual é: ${this.dia}/${this.mes}/${ano} !!!`)
    }

    escreverMes (){
    switch (this.mes) {
        case "01":console.log("JANEIRO")
            break;
            case "02":console.log("FEVEREIRO")
            break;
            case "03":console.log("MARÇO")
            break;
            case "04":console.log("ABRIL")
            break;
            case "05":console.log("MAIO")
            break;
            case "06":console.log("JUNHO")
            break;
            case "07":console.log("JULHO")
            break;
            case "08":console.log("AGOSTO")
            break;
            case "09":console.log("SETEMBRO")
            break;
            case "10":console.log("OUTUBRO")
            break;
            case "11":console.log("NOVEMBRO")
            break;
            case "12":console.log("DEZEMBRO")
            break;   
        default:
            break;
    }
    }

    quantoFaltoFinaldDoAno (){

        let final = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        let mesAno = (this.mes);
        let diaAno = (this.dia);
        let diasDoAno = 365;
        let diasCorrido = 0
        for(let i = 0 ; i < mesAno - 1; i++ ){
            diasCorrido += final[i];
        }
        diasCorrido += diaAno
        let diasQueFalta = diasDoAno - diasCorrido;

        console.log(`${this.dia} / ${this.mes} / ${this.ano} \nfalta :${diasQueFalta}  dias para acabar o ano`)

    }
    
    alterarMes(){
        this.mes = Number(prompt("informe Qual mes você deseja alterar: "))
        return this.mes
    }
}


let dia = Number (prompt("Informe o dia do Ano "))
let mes = Number (prompt("Informe o mês do Ano "))
let ano = Number (prompt("Informe o Ano "))

const calendario = new data (dia, mes, ano)



console.log(`${calendario.dia}/ ${calendario.mes} / ${calendario.ano}`) 

calendario.escreverData ()
calendario.escreverMes  ()
calendario.quantoFaltoFinaldDoAno ()

calendario.alterarMes()
console.log(`${calendario.dia}/ ${calendario.mes} / ${calendario.ano}`) 