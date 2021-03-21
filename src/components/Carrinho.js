import React from 'react'
import style from 'styled-components'
import lixo from '../assets/img/lixo.png'


const DivCarrinho = style.div`
    min-height: 390px;
    width: 100%; 
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 1px 3px 6px #0000003B;
    border-radius: 30px;
    margin-top: 40px;
    padding-bottom:35px;
    `

const Tickets = style.div`
    height: 90px;
    background: #3A1A68 0% 0% no-repeat padding-box;
    border-radius: 30px 30px 0px 0px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    font: normal normal normal 25px/40px Audiowide;
`

const Coluna1 = style.div`
  flex: 1.3;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`

const Coluna2 = style.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`

const LinhaTitulo = style.div`
    height: 45px;
    background: #EDE0FF 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TextoTitulos = style.div`
    font: normal normal normal 22px/40px Audiowide;
    letter-spacing: 0px;
`

const LinhaProdutos = style.div`
    min-height: 100px;
    background-color: white;
`

const InfosProdutos = style.div`
    height: 165px;
    background-color: white;
    display: flex;
    align-items: space-around;
    border-bottom: 0.5px solid #8C8C8C;
    margin-left: 10px;
    margin-right: 10px;
`

const Titulos = style.div`
    text-align: center;
    font: normal normal normal 20px/36px Raleway;
    margin-bottom: 10px;
`

const BotaoAdicionar = style.button`
    border: 3px solid #0AAA14;
    background-color: white;
    border-radius: 7px;
    width: 150px;
    height: 45px;
    text-align: center;
    font: normal normal normal 15px/30px Raleway;
    font-weight: 600;
    letter-spacing: 0px;
    color: #0AAA14;
`

const BotaoRemover = style.button`
    border: 3px solid #FF5050;
    height: 45px;
    width: 110px;
    border-radius: 7px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconeRemover = style.img`
    height: 30px;
`

const BoxValorTotal = style.div`
    background: #EDE0FF 0% 0% no-repeat padding-box;
    height: 130px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`

const ValorTotal = style.div`
    text-align: center;
    font: normal normal normal 25px/40px Audiowide;
    color: #3A1A68;
`

const Valor = style.div`
    text-align: center;
    font: normal normal normal 21px/31px Audiowide;
    color: #3A1A68;
    margin-top: 10px;
`

const FinalizarCompra = style.button`
    background: #3A1A68;
    border-radius: 35px;
    font: normal normal normal 20px/40px Audiowide;
    color: white;
    display: flex;
    margin: auto; 
    width: 220px;
    text-align: center;
    justify-content: center;
    margin-top: 40px;
`
const CarrinhoVazio = style.p`
    color: black;
    font: normal normal normal 20px/36px Raleway;    
    text-align: center;
    opaciy: 0.5;
`
export default class Carrinho extends React.Component {
    pegarValorTotal = () => {
        let valorTotal = 0

        for(let produto of this.props.produtosNoCarrinho){
            valorTotal += produto.precoProduto * produto.quantidade
        }
        return valorTotal
    }
    
    render(){
        
        return (

        <div>
            <DivCarrinho>
                
                <Tickets>Seus Tickets</Tickets>
                <LinhaTitulo>
                    <Coluna1>
                        <TextoTitulos>Viagem</TextoTitulos>
                    </Coluna1>

                    <Coluna2>
                        <TextoTitulos>QTD.</TextoTitulos>
                    </Coluna2>
                </LinhaTitulo>

                <LinhaProdutos>
                    {this.props.produtosNoCarrinho.length == 0 ? (
                        <CarrinhoVazio>Seu carrinho está vazio</CarrinhoVazio>
                    ) :
                        this.props.produtosNoCarrinho.map(produto => (
                            <InfosProdutos>
                            <Coluna1>
                                <Titulos>{produto.nomeProduto}</Titulos>
                                <BotaoAdicionar onClick={()=>this.props.AddProdutoNoCarrinho(produto.id)}>Adicionar Ticket</BotaoAdicionar> 
                            </Coluna1>
    
                            <Coluna2>
                                <Titulos>{produto.quantidade}</Titulos>
                                <BotaoRemover
                                onClick={()=>this.props.removerProdutoNoCarrinho(produto.id)}
                                ><IconeRemover src={lixo}></IconeRemover></BotaoRemover> 
                            </Coluna2>
                        </InfosProdutos>
    
                        ))
                    }
                </LinhaProdutos>

                <BoxValorTotal>
                    <ValorTotal>Valor Total</ValorTotal>
                    <Valor>R${this.pegarValorTotal()}</Valor>
                </BoxValorTotal>

                <FinalizarCompra>Finalizar Compra</FinalizarCompra>

            </DivCarrinho>

        </div>

    )}

    
}