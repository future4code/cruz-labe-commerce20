import React from 'react'
import style from 'styled-components'
import Logo from  '../assets/img/logo.png'
import Face from '../assets/img/face.png'
import Insta from '../assets/img/insta.png'
import Twitter from '../assets/img/twitter.png'
import Whats from '../assets/img/whats.png'

const DivFooter = style.div`
    height: 210px;
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
    background: #053C6E;
    margin-top: 80px;
    flex-flow: column;
    `
const LogoFooter = style.img`
    width: 270px;
    margin-bottom: 30px;
    `
const DivIcones = style.div`
    display: flex;
    justify-content: space-around;
    width: 260px;
`

const Icones = style.img`
    height: 35px;
`

export default class Footer extends React.Component{

    render(){
   
        return(
            <div>
            <DivFooter>
                <LogoFooter src={Logo}/>

                <DivIcones>
                    <Icones src={Face}/>
                    <Icones src={Insta}/>
                    <Icones src={Twitter}/>
                    <Icones src={Whats}/>
                </DivIcones>

            </DivFooter>

            </div>
        )
    }
}
