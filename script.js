// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, dataCadastro, descricao,preco){
    this.nome = nome
    this.dataCadastro = dataCadastro
    this.descricao = descricao
    this.preco = preco
    }
    mostrarProduto(){
        // return this.nome + " " + this.dataCadastro + " " + this.descricao + " " + this.preco
    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao,preco,imagemDestaque){
    super(nome,dataCadastro,descricao,preco,imagemDestaque)
    this.imagemDestaque = imagemDestaque
    }
    mostrarProdutoDestaque(){
        return `
            <h1>${this.nome}</h1>
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
        `
        // return this.nome + " " + this.dataCadastro + " " + this.descricao + " " + this.preco + " " + this.imagemDestaque
    }
}

const produto = new ProdutoDestaque("Banana","17-02-2023","Fruta", 10000000,"MinionBanana.png")

const ProdutoDestaque = document.getElementById("produto-destaque")
produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque())