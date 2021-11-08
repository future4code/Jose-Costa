import React from "react";
import styled from "styled-components";

import { MdOutlineSend } from "react-icons/md";

const InputContainer = styled.div`
    display: flex;
    align-items: center
`

const InputUsuario = styled.input`
    width: 10vw;
    border: none;
    background-color: #bdc6ce;
    border-radius: 15px;
    padding: 1vw;
    outline: none;
    margin: 1vw 1vw 1vw;
    `

const InputMsg = styled.input`
    width: 50vw;
    border: none;
    background-color: #bdc6ce;
    border-radius: 15px;
    padding: 1vw;
    outline: none;
    margin: 1vw 1vw 1vw 0;
    `

const CursorPointer = styled.span`
    cursor: pointer;
`

class Inputs extends React.Component {
    state = {
        inputMsg: "",
        inputNick: "",
        nick: "Nickname",
        mensagem: "",
    }

    armazenaNick = (event) => {
        this.setState({
            inputNick: event.target.value,
        })
    }

    armazenaMsg = (event) => {
        this.setState({
            inputMsg: event.target.value,
        })
    }

    enviarMsg = (adicionaMsg) => {
        this.setState({
            inputMsg: "",
        })
        adicionaMsg(this.state.inputNick, this.state.inputMsg);
    }

    enviarEnter = (event) => {
        if(event.key === 'Enter'){
            this.enviarMsg(this.props.adicionaMsg);
          }
        }

    render() {
        return (
            <InputContainer>
                <InputUsuario onChange={this.armazenaNick} value={this.state.inputNick} placeholder="Usuário" /> 
                <InputMsg onChange={this.armazenaMsg} value={this.state.inputMsg} placeholder="Mensagem" onKeyDown={this.enviarEnter}/>
                <CursorPointer><MdOutlineSend onClick={() => this.enviarMsg(this.props.adicionaMsg)} /> </CursorPointer>
            </InputContainer>
        )
    }
}

export default Inputs;
