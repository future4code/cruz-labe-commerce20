import React from 'react'
import style from 'styled-components'

const DivCarrinho = style.div`
    height: 100vh;
    width: 100vw; 
    background-image: url(${require(`../assets/img/imagemBanner.png`)});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    `

export default class Carrinho extends React.Component {

    
    render(){
        
        return (

        <div>
        <DivCarrinho>
            
        
        </DivCarrinho>

        </div>

    )}

    
}