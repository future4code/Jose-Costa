import React from "react";
import styled from "styled-components";

const TextoChat = styled.div`
    display:inline-block;
    font-size: 0.8rem;
    border: none;
    background-color: #d2ceb9;
    border-radius: 15px;
    padding: 0 1vw 0 1vw;
    margin-top: 1vw;
`

class Bots extends React.Component {
     render() {
        return (
            <TextoChat>
                <p> <b>{this.props.nomeAtual}</b>:</p>
                <p> {this.props.resposta} </p>
            </TextoChat>
        )
    }
}

export default Bots;