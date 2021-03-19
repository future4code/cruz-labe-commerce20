import React from 'react';
import style from 'styled-components'
import Banner from './components/Banner'
import Produtos  from './components/Produtos.js'
import Carrinho  from './components/Carrinho.js'


const Container = style.div`
  width: 70vw;
  margin: 0 auto;
  overflow-y: hidden;
  display: flex;
`
const Coluna1 = style.div`
  flex: 2;
  padding-right:12px;
 `
const Coluna2 = style.div`
  flex: 1;
  padding-left:12px;
`
const listaDeProdutos = [
  {
  id: 1,
  nomeProduto: 'Marte',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 30000,
  imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg'
  
},
{
  id: 2,
  nomeProduto: 'Venus',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 20000,
  imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg'
  
},
{
  id: 3,
  nomeProduto: 'Jupiter',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 10000,
  imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg'
  
},
{
  id: 4,
  nomeProduto: 'Saturno',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 100000,
  imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg'
  
  },
]


export default class App extends React.Component() {
state = {
  produtosNoCarrinho : [{
    
      id: 3,
      nomeProduto: 'Jupiter',
      descricao: 'Lorem Ipson bla bla',
      precoProduto: 10000,
      imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg',
      quantidade: 1
      
    },
    {
      id: 4,
      nomeProduto: 'Saturno',
      descricao: 'Lorem Ipson bla bla',
      precoProduto: 100000,
      imagem: 'https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg',
      quantidade: 2
      },
  ]
}

AddProdutoNoCarrinho = (produtoId) =>{
  const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === listaDeProdutos.id)

  if(produtoNoCarrinho) {
    const novoProdutoNoCarrinho = this.state.produtoNoCarrinho.map(produto => {
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
    const produtoParaAdd = listaDeProdutos.find(produto => produtoId === produto.id)
    const novoProdutoNoCarrinho = [...this.state.produtoNoCarrinho, {...produtoParaAdd, quantidade: 1}]

    this.setState({produtoNoCarrinho: novoProdutoNoCarrinho})
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
        <Container>
          <Coluna1><Produtos
          planeta={this.state.produtosNoCarrinho}
          /></Coluna1>
          <Coluna2><Carrinho/></Coluna2>


          
        </Container>
    </div>
   );
  }
}

