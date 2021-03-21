import React from 'react';
import style from 'styled-components'
import Banner from './components/Banner'
import Produtos  from './components/Produtos.js'
import Carrinho  from './components/Carrinho.js'
import Footer from './components/Footer.js'
import Filtro from './components/Filtro.js'
import Jupiter from './assets/img/planetas/Jupiter.png'
import Marte from './assets/img/planetas/Marte.png'
import Venus from './assets/img/planetas/Venus.png'
import Saturno from './assets/img/planetas/Saturno.png'

const Container = style.div`
  width: 70vw;
  margin: 0 auto;
  overflow-y: hidden;
  display: flex;
`
const Coluna1 = style.div`
  flex: 2.5;
  padding-right:12px;
  margin-left:4px;
  margin-bottom: 10px;
 `
const Coluna2 = style.div`
  flex: 1;
  padding-left:10px;
  margin-right: 5px;
`
export default class App extends React.Component{
state = {
  ordenacaoFiltro : 'Crescente',

  produtosNoCarrinho : [],

  listaDeProdutos: [
    {
    id: 1,
    nomeProduto: 'Marte',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 30000,
    imagem: Marte
    
  },
  {
    id: 2,
    nomeProduto: 'Venus',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 20000,
    imagem: Venus
    
  },
  {
    id: 3,
    nomeProduto: 'Jupiter',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 10000,
    imagem: Jupiter
    
  },
  {
    id: 4,
    nomeProduto: 'Saturno',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 100000,
    imagem: Saturno
    
    },
  ],
  listaEstatica:  [
    {
    id: 1,
    nomeProduto: 'Marte',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 30000,
    imagem: Marte
    
  },
  {
    id: 2,
    nomeProduto: 'Venus',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 20000,
    imagem: Venus
    
  },
  {
    id: 3,
    nomeProduto: 'Jupiter',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 10000,
    imagem: Jupiter
    
  },
  {
    id: 4,
    nomeProduto: 'Saturno',
    descricao: 'Lorem Ipson bla bla',
    precoProduto: 100000,
    imagem: Saturno
    
    },
  ]
}

componentDidMount() {
  this.ordenacao()
}

ordenacao () {
  if (this.state.ordenacaoFiltro == 'Crescente') {
    this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a,b) => a.precoProduto
      - b.precoProduto)})
  } else {
    this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a,b) => b.precoProduto
      - a.precoProduto)})
  }
}

onChangeSelect = (event) => {
  this.setState({
    ordenacaoFiltro:event.target.value
  }, () => {
    this.ordenacao()
  })

}

onChangeValorMin = (event) => {
  if(event.target.value != '') {
    this.setState({
      listaDeProdutos:this.state.listaDeProdutos.filter((produto) => produto.precoProduto >= event.target.value)
    })
  } else {
    this.setState({
      listaDeProdutos: this.state.listaEstatica
    })
}
}

onChangeValorMax = (event) => {
  if(event.target.value != '' && event.target.value >= 10000) {
    this.setState({
      listaDeProdutos:this.state.listaDeProdutos.filter((produto) => produto.precoProduto <= event.target.value)
    })
  } else {
    this.setState({
      listaDeProdutos: this.state.listaEstatica
    })
}
}

onChangeViagem = (event) => {
  if(event.target.value != '') {
    this.setState({
      listaDeProdutos:this.state.listaDeProdutos.filter((produto) => (produto.nomeProduto.toLowerCase()).includes(event.target.value.toLowerCase()))
    })
  } else {
      this.setState({
        listaDeProdutos: this.state.listaEstatica
      })
  }
}

AddProdutoNoCarrinho = (produtoId) =>{
  const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

  if(produtoNoCarrinho) {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
      if(produtoId === produto.id){
        return {
          ...produto,
          quantidade: produto.quantidade + 1
        }
      }
      return produto
    });
    this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
  } else {
    const produtoParaAdd = this.state.listaDeProdutos.find(produto => produtoId === produto.id)
    const novoProdutoNoCarrinho = [...this.state.produtosNoCarrinho, {...produtoParaAdd, quantidade: 1}]

    this.setState({produtosNoCarrinho: novoProdutoNoCarrinho}) 
  }
}

  removerProdutoNoCarrinho = (produtoId) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if(produto.id === produtoId){
        return{
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)
    this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
  }

  render(){

  return (
    <div>
        <Banner/>
        <Container><Filtro onChangeValorMin={this.onChangeValorMin} onChangeValorMax={this.onChangeValorMax} onChangeSelect={this.onChangeSelect} onChangeViagem={this.onChangeViagem}/></Container>
        <Container>
          <Coluna1><Produtos AddProdutoNoCarrinho={this.AddProdutoNoCarrinho} planeta={this.state.listaDeProdutos}/></Coluna1>
          <Coluna2><Carrinho produtosNoCarrinho={this.state.produtosNoCarrinho} removerProdutoNoCarrinho={this.removerProdutoNoCarrinho} AddProdutoNoCarrinho={this.AddProdutoNoCarrinho}/></Coluna2>
        </Container>
        <Footer/>
    </div>
   );
  }
}

