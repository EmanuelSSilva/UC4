import PromptSync from "prompt-sync"
const prompt = PromptSync()


class Produto {
    constructor (nome, preco, qtdEstoque, categoria){
        this.nome = nome
        this.preco = preco
        this.qtdEstoque = qtdEstoque
        this.categoria = categoria
        this.disponivel = true   
    }

    exibirInformacoes (){
        console.log(`Nome: ${this.nome} \nPreço: ${this.preco} \nQuantidade em Estoque: ${this.qtdEstoque} \nCategoria: ${this.categoria} \nDisponível: ${this.disponivel}`)
    }

    mostrarQtdEstoque (){
        console.log(`A quantidade em estoque do produto ${this.nome} é: ${this.qtdEstoque}`)
    }
    removerEstoque (quantidade){
        if (quantidade <= this.qtdEstoque){
            this.qtdEstoque -= quantidade
            console.log(`Foram removidos ${quantidade} unidades do produto ${this.nome}. Estoque atual: ${this.qtdEstoque}`)
        }else{
            console.log(`Não há estoque suficiente para remover ${quantidade} unidades do produto ${this.nome}. Estoque atual: ${this.qtdEstoque}`)
        }
    }
    definirPreco (novoPreco){
        if (novoPreco >= 0){
            this.preco = novoPreco
            console.log(`O preço do produto ${this.nome} foi atualizado para: ${this.preco}`)
        }else{
            console.log("O preço não pode ser negativo.")
        }    

    }

    verificarDisponibilidade (){
        if (this.qtdEstoque > 0){
            this.disponivel = true
            console.log(`O produto ${this.nome} está disponível.`)
        }else{
            this.disponivel = false
            console.log(`O produto ${this.nome} não está disponível.`)
        }


    }
}

const produto1 = new Produto ("Notebook", 3500, 10, "Eletrônicos", true)

produto1.exibirInformacoes()
produto1.mostrarQtdEstoque()    
produto1.removerEstoque(3)
produto1.definirPreco(3200)
produto1.verificarDisponibilidade()










