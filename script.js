// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, dataCadastro, descricao,preco){
    this.nome = nome
    this.dataCadastro = dataCadastro
    this.descricao = descricao
    this.preco = preco
    }
    mostrarProduto(){
        return this.nome + " " + this.dataCadastro + " " + this.descricao + " " + this.preco
    }
}

const produto = new Produto("IFCorporation","17-02-2007","Vendinha da Esquina", 10000000)
console.log(produto.mostrarProduto())

class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao,preco,imagemDestaque){
    super(nome,dataCadastro,descricao,preco,imagemDestaque)
    this.imagemDestaque = imagemDestaque
    }
    mostrarProdutoDestaque(){
        return this.nome + " " + this.dataCadastro + " " + this.descricao + " " + this.preco + " " + this.imagemDestaque
    }
}

const produtodestaque = new ProdutoDestaque("IFCorporation","17-02-2007","Vendinha da Esquina", 10000000,"logo.png")
console.log(produtodestaque.mostrarProdutoDestaque())
