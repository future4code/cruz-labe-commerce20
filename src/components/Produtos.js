import React from 'react'
import style from 'styled-components'

// Estilização container principal está inline

const DivBox = style.div`
    height: 500px;
    width: 43%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 30px;
    opacity: 1;
    display: flex;
    text-align: center;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-top: 40px;

`

const Imagem = style.img`
    width: 85%;
    height: 200px;
    object-fit: cover;
`

const Titulo = style.h3`
    font: normal normal normal 40px/51px Audiowide;
    letter-spacing: 0px;
    color: #FF8142;
    margin: 0;
    margin-top: 15px;
`

const Linha = style.hr`
    border: 1px solid #3A1A68;
    background-color: #341468;
    width: 40px;
`

const Descricao = style.p`
    font: normal normal normal 20px/33px Raleway;
    letter-spacing: 0px;
    color: #442670;
    margin: 5px 0px 5px 0px;
`

const Preco = style.h4`
    font: normal normal normal 26px/33px Audiowide;
    letter-spacing: 0px;
    color: #FF8142;
    margin: 15px 0px 15px 0px;
`

const Botao = style.button`
    border: 3px solid #3A1A68;
    border-radius: 35px;
    text-align: center;
    font: normal normal bold 16px/24px Raleway;
    color: #3A1A68;
    background-color: white;
    padding: 10px;

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





export default class Produtos extends React.Component{

    render(){
        
        return (

        <div style={{display:'flex', justifyContent: 'space-between', flexFlow: 'row wrap', marginRight: '50px', marginLeft: '1px'}}>
           
            {listaDeProdutos.map(produto => (
                <DivBox>
                    <Imagem src='https://www.galeirosdosul.com.br/images/Honda_CB750_K0_1969.jpg'/>
                    <Titulo>Marte</Titulo>
                    <Linha/>
                    <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Descricao>
                    <Preco>R$999</Preco>
                    <Botao>Adicionar ao carrinho</Botao>              
                </DivBox>
            ))} 

        </div>

    )}

}

























// const Card = style.div `
// display: flex;
// flex-direction: column;
// border: solid 1px #000;
// height: 450px;
// width: 400px;
// `
// const DivImg = style.div`
// height: 350px;
// width: 350px;
// `
// const ImgProduto = style.img `
// width: 100%;
// height: 100%;
// `
// const NomeProduto = style.h3 `
// text-align: center;
// `
// const Descricao = style.p`
// font-size: 16px;
// margin: 10px;
// `

// const BotaoAdd = style.button `
// width: 350px;
// color: orange;
// cursor: pointer;

// `

//  export default class Produtos extends React.Component{

//         render(){
//         return (
//             <Card>
//                 <DivImg>
//                 <ImgProduto src={this.props.imagem}/>
//                 </DivImg>
//                 <NomeProduto>{this.props.nomeProduto}</NomeProduto>
//                 <Descricao>{this.props.descricao}</Descricao>
//                 <Descricao>R$ {this.props.precoProduto}</Descricao>
//                 <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
//             </Card>
//         )
//     }    
// }

