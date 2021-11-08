import React from "react";
import styled from "styled-components";

const PerguntaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vw;
`

const Lista = styled.li`
    list-style-position: inside;
    margin: 1vh;
`

class PergunrtaAberta extends React.Component {
    render() {
        return (
            <PerguntaContainer>
                <Lista> {this.props.pergunta} </Lista>
                <input required /> 
            </PerguntaContainer>
        )
    }
}

export default PergunrtaAberta;