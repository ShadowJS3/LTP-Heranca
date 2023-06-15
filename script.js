class MeuError extends Error {
  constructor(message) {
    super(message);
    this.name = "Erro nos atributos!";
  }
}

class Produtos {
  constructor(nome, dataDeCadastro, descricao, preco) {
    this.nome = nome;
    this.dataDeCadastro = dataDeCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }

  mostrarAtributos() {
    try {
      return this.mostrarDadosDestaque();
    } catch (error) {
      console.log(error);
    }
  }

  mostrarDadosDestaque() {
    if (
      this.nome !== "" &&
      this.descricao !== "" &&
      this.preco !== "" &&
      this.dataDeCadastro !== ""
    ) {
      return `
    <div class="produto-padrao">
    <h1>${this.nome}</h1>
    <br>
    <div>${this.descricao}</div>
    <h3>Preço: ${this.preco},00</h3>
    <p>${this.dataDeCadastro}</p> 
    </div>`;
    } else {
      throw new MeuError("Algum campo faltando");
    }
  }
}

class ProdutoDestaque extends Produtos {
  constructor(nome, dataDeCadastro, descricao, preco, imagem) {
    super(nome, dataDeCadastro, descricao, preco);
    this.imagem = imagem;
  }

  mostrarAtributosDestaque() {
    try {
      return this.mostrarDados();
    } catch (error) {
      console.log(error);
    }
  }

  mostrarDados() {
    if (
      this.nome !== "" &&
      this.descricao !== "" &&
      this.preco !== "" &&
      this.dataDeCadastro !== "" &&
      this.imagem !== ""
    ) {
      return `
        <div class="produto-destaque">
        <h1>${this.nome}</h1>
        <img src="${this.imagem}">
        <div>${this.descricao}</div>
        <h3>Preço: ${this.preco},50</h3>
        <p>${this.dataDeCadastro}</p>
        </div> `;
    } else {
      throw new MeuError("Algum campo no produto destaque");
    }
  }
}

const produto = new Produtos(
  "Faca Butterfly",
  "16/05/2021",
  "Faca para manobras e decoração",
  100
);
const produto2 = new Produtos(
  "Faca M9",
  "02/05/2023",
  "Faca para manobras e decoração",
  50
);
const produto3 = new Produtos(
  "Canivete",
  "20/2/2020",
  "Faca para o uso diário",
  30
);
const produtoDestaque = new ProdutoDestaque(
  "Faca Karambit",
  "22/08/2023",
  "Faca para manobras e decoração",
  500,
  "https://tse2.mm.bing.net/th?id=OIP.XiRRSVq6y_NOR_GluMymrgHaE8&pid=Api&P=0&h=180"
);
console.log(produto.mostrarDadosDestaque());
console.log(produto2.mostrarDadosDestaque());
console.log(produtoDestaque.mostrarDados());

const produtoBasico = document.getElementById("lista-produtos");
produtoBasico.insertAdjacentHTML("afterbegin", produto.mostrarDadosDestaque());
const produtosBasico2 = document.getElementById("lista-produtos");
produtosBasico2.insertAdjacentHTML(
  "afterbegin",
  produto2.mostrarDadosDestaque()
);
const produtosBasico3 = document.getElementById("lista-produtos");
produtosBasico3.insertAdjacentHTML(
  "afterbegin",
  produto3.mostrarDadosDestaque()
);
const produtoDestaqueMostrar = document.getElementById("produto-destaque");
produtoDestaqueMostrar.insertAdjacentHTML(
  "afterbegin",
  produtoDestaque.mostrarDados()
);