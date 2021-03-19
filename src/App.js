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

export default function App() {
  return (
    <div>
        <Banner/>
        <Container>
          <Coluna1><Produtos/></Coluna1>
          <Coluna2><Carrinho/></Coluna2>


          
        </Container>
    </div>
  );
}


