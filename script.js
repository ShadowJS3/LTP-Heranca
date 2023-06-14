class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Produto {
    constructor (nome, datadeCadastro, descricao, preco){
      this.nome = nome
      this.datadeCadastro = datadeCadastro
      this.descricao = descricao
      this.preco = preco
    }

  mostrarProduto{
    try {
      return this.montarProdutos()
    } catch (error) {
      console.log(error)
    }
  }

  montarProdutos (){
    if (this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != ""){
      return this.nome + this.datadeCadastro + this.descricao + this.preco 
    }else{
      throw new MeuErro("esta faltando atributos")
    }
  }
  
  const produto = new Produto("Relogio", "16/02/2007", "Relógio Masculino", "R$ 100,00")
  console.log(produto.mostrarProdutos())
  
  class ProdutosDestaque extends Produto{
    constructor (nome, datadeCadastro, descricao,  preco, imagemDestaque){
      super(nome, datadeCadastro, descricao, preco, imagemDestaque)
      this.imagemDestaque = imagemDestaque
    }

    mostrarProdutosDestaque(){
      try {
      return this.montarProdutosDestaque()
    } catch (error) {
      console.log(error)
    }
  } 
    }

    montarProdutosDestaque(){
      if (this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != ""){
        return `
        <h1 class = "bela" >${this.nome}</h1>
        <h4> ${this.datadeCadastro}</h4>
        <img src="${this.imagemDestaque}" style="height: 250px"/>
        <p> ${this.descricao}</p>
        <p> ${this.preco}</p>
        ` 
       // return this.nome + this.datadeCadastro + this.descricao + this.preco + this.imagemDestaque
     }
    } else{
      throw new MeuErro("esta faltando atributos")
    }
  }

  const produtosDestaque = new ProdutosDestaque("Relogio", "16/02/2007", "Relógio Masculino", "R$ 100,00", "https://http2.mlstatic.com/relogio-masculino-naviforce-militar-esportivo-pulseira-couro-D_NQ_NP_651401-MLB27925078333_082018-F.jpg");
  //console.log(produtosDestaque.mostrarProdutosDestaque())
  
  
  const produtos = document.getElementById("produto-destaque")
  produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
  
  
  class ProdutosdaLista extends Produto{
    constructor (nome, datadeCadastro, descricao,  preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
      super(nome, datadeCadastro, descricao, preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
      this.imagemDestaque = imagemDestaque
      this.nome2 = nome2
      this.descricao2 = descricao2
      this.preco2 = preco2
      this.nome3 = nome3
      this.descricao3 = descricao3
      this.preco3 = preco3
      this.nome4 = nome4
      this.descricao4 = descricao4
      this.preco4 = preco4
    }

  montarListaProdutos() {
     if (this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != ""){
    return `
      
      <div class="listinha">
    <div class="grid-container">
      <div class="coluna">
      <h4>${this.nome2}</h4>
      <p>${this.descricao2}</p>
      <p>${this.preco2}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome3}</h4>
      <p>${this.descricao3}</p>
      <p>${this.preco3}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome4}</h4>
      <p>${this.descricao4}</p>
      <p>${this.preco4}</p>
      </div>
    </div>
  </div>
    `;
  }else{
      throw new MeuErro("esta faltando atributos")
    }
  }
  }
  
  const produtosLIsta = new ProdutosdaLista("Relogio", "16-02-2007", "Relogio Masculino", "R$ 100,00", "https://http2.mlstatic.com/relogio-masculino-naviforce-militar-esportivo-pulseira-couro-D_NQ_NP_651401-MLB27925078333_082018-F.jpg", "Relogio Feminino", "Relogio Feminino - Esportivo", "R$ 99,99", "Relogio de Corrida", "Relogio de corrida - Masculino", "R$ 200,99", "Relogio Casual", "Unissex", "R$ 89,99");
  
  const listaProdutos = document.getElementById("lista-produtos")
  listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarListaProdutos());
  