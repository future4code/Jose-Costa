import React from "react";
import styled from "styled-components";

const PerguntaContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Lista = styled.li`
    list-style-position: inside;
    margin: 1vw;
`

const Select = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
`

class PerguntaOpcoes extends React.Component {
    render() {
        const opcoes = this.props.opcoes;
        const listaOpcoes = opcoes.map((elemento, id) => {
            return <option key={id} value={elemento}>{elemento}</option>
        })

        return (
            <PerguntaContainer>
                <Lista>{this.props.pergunta}</Lista>
                <Select onChange={this.props.onChange}> 
                {listaOpcoes}    
                </Select>      
            </PerguntaContainer>
        )
    }
}

export default PerguntaOpcoes;