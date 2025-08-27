import promptSync from 'prompt-sync'
const prompt = promptSync()

let salario = Number(prompt("Informe o seu salário:"));
let emprest = Number(prompt("Informe o valor do emprestimo:"));
let parcela = Number(prompt("Informe quantas parcela deseja para o emprestimo:"));

const juros = 0.035
let terc = salario * 0.30
let valorParce = emprest / parcela
let valorConju = (valorParce * juros) + valorParce
let valorTota = valorConju * parcela


if (terc < valorConju){
    
    console.log('Emprestimo Não autorizado!')
    console.log(`Seu emprestimo ultrapassa 30% da sua renda!!!`)

}else {

    console.log('Emprestimo autorizado!')
    console.log(`O valor solicitado foi: ${emprest}`)
    console.log(`A quantidade de parcelas é: ${parcela} e tribuido um juros de 3.5% que ficar ${valorConju.toFixed(2)}`)
    console.log(`o valor total do seu emprestimo ${valorTota.toFixed(2)}`)
}
