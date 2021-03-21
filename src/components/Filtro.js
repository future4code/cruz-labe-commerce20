import React from 'react'
import style from 'styled-components'

const BoxFiltro = style.div`
    height: 160px;
    width: 70vw;
    background: #3A1A68 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 30px;
    margin-bottom: 20px;
    margin-top: 60px;
    display: flex;
    align-items: center;
`

const Colunas = style.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
`

const Coluna = style.div`
    width: 12vw;   
    border: none;
`

const Titulo = style.div`
    font: normal normal normal 18px/26px Audiowide;
    color: white;
    magin: none;
    margin-bottom: 10px;
`

const InputFiltro = style.input`
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    font: normal normal normal 16px/24px Raleway;
    ::placeholder {
        color: white;
    }
    opacity: 0.3;
    width: 100%;
    height: 23px;
    outline: none;
    color: white;
    :focus {
        opacity: 1;
    }
    

`

const Ordenacao = style.select`
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    font: normal normal normal 16px/24px Raleway;
    color: white;
    opacity: 0.3;
    height: 26px;
    option {
        color: white;
        background-color: #3A1A68;
        top: 100%;
    }
    outline: none;
`



export default class Filtro extends React.Component{


    

    render(){

        return (

        <div>
            <BoxFiltro>
                <Colunas>
                    <Coluna>
                        <Titulo>Viagem</Titulo>
                        <InputFiltro type="text" placeholder="Busque por nome" id="buscaNome" onChange={this.props.onChangeViagem}/>
                    </Coluna>
                        
                    <Coluna>
                        <Titulo>Valor mín.</Titulo>
                        <InputFiltro onChange={this.props.onChangeValorMin} type="text" placeholder="Ex. 1000" id="buscaNome" />
                    </Coluna>

                    <Coluna>
                        <Titulo>Valor máx.</Titulo>
                        <InputFiltro onChange={this.props.onChangeValorMax} type="text" placeholder="Ex. 1000" id="buscaNome"/>
                    </Coluna>

                    <Coluna>
                        <Titulo>Ordenação</Titulo>
                        <Ordenacao id="ordenacao" onChange={this.props.onChangeSelect}>
                            <option value="Crescente">Crescente</option>
                            <option value="Descrescente">Descrescente</option>
                        </Ordenacao>
                    
                    </Coluna>
                </Colunas>
            </BoxFiltro> 
        </div>

    )}

}
