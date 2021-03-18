import React from 'react';
import style from 'styled-components'
import Produtos  from './components/Produtos.js'

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
  imagem: ''
  
},
{
  id: 3,
  nomeProduto: 'Jupiter',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 10000,
  imagem: ''
  
},
{
  id: 4,
  nomeProduto: 'Saturno',
  descricao: 'Lorem Ipson bla bla',
  precoProduto: 100000,
  imagem: ''
  
  },
]

export default function App() {
  return (
    <div className="App">
    <Produtos

    />
    </div>
  );
}


