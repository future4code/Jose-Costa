import React from 'react'
import styled from 'styled-components'

const IconePequeno = styled.img`
height: 2.3vh;
width: auto;
`
export default class IconeMarcacao extends React.Component {
    state = {
        marcacao: false,
    }
    onClickMarcacao = () => {
        if (this.state.marcacao === false) {
            console.log(`O post foi salvo!`)
            this.setState({
                marcacao: true,
            })
        }
        else {
            console.log(`O post foi retirado de salvo!`)
            this.setState({
                marcacao: false,
            })
        }
    }
    render() {
        let iconeMarcacao;

        if (this.state.marcacao) {
            iconeMarcacao = "https://www.pinclipart.com/picdir/big/547-5479147_flag-icon-clipart-clip-transparent-download-free-flag.png"  
        } else {

            iconeMarcacao = "https://www.pinclipart.com/picdir/big/448-4485361_png-file-svg-flag-icon-png-clipart.png"
        }
        return (
            <IconePequeno onClick={this.onClickMarcacao} src={iconeMarcacao} alt="Ícone de marcação"></IconePequeno>
        )
    }
}