import React from 'react'
import style from 'styled-components'
import Logo from  '../assets/img/logo.png'
    
    const DivBanner = style.div`
    height: 100vh;
    width: 100vw; 
    background-image: url(${require(`../assets/img/imagemBanner.png`)});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    `

    const Coluna = style.div`
    width: 50vw;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    `

    const Chamada = style.h1`
    color: white;
    font: normal normal normal 57px/72px Audiowide;
    font-size: 2.3em;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20vh;
    `

    const LogoBanner = style.img`
    width: 30vw;
    `

export default class Banner extends React.Component {


    render(){
        
        return (

        <div>
        <DivBanner>
            <Coluna>
                <LogoBanner src={Logo}/>
                <Chamada>Prepare-se para embarcar em <br/> nossa Nave Espacial!</Chamada>
            </Coluna>
            
        </DivBanner>

        </div>

    )}

    
}