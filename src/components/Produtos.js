import React from 'react'
import style from 'styled-components'
import { listaDeProdutos } from './ListaDeProdutos'

const Card = style.div `
display: flex;
flex-direction: column;
border: solid 1px #000;
height: 450px;
width: 400px;
`
const DivImg = style.div`
height: 350px;
width: 350px;
`
const ImgProduto = style.img `
width: 100%;
height: 100%;
`
const NomeProduto = style.h3 `
text-align: center;
`
const Descricao = style.p`
font-size: 16px;
margin: 10px;
`

const BotaoAdd = style.button `
width: 350px;
color: orange;
cursor: pointer;

`

 export default class Produtos extends React.Component{
        render(){
        return (
            <Card>
                <DivImg>
                    <ImgProduto src={this.props.imagem}/>
                </DivImg>
                <NomeProduto>{this.props.nomeProduto}</NomeProduto>
                <Descricao>{this.props.descricao}</Descricao>
                <Descricao>R$ {this.props.precoProduto}</Descricao>
                <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
            </Card>
        )
    }    
}

