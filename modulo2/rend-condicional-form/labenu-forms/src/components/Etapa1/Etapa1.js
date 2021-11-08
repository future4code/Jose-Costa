import React from "react";
import styled from "styled-components";
import PerguntaAberta from "../Perguntas/PerguntaAberta";
import PerguntaOpcoes from "../Perguntas/PerguntaOpcoes";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

class Etapa1 extends React.Component {
    state = {
        inputEscolaridade: null,
    }

    salvaEscolaridade = (event) => {
        console.log(event.target.value)
        this.setState({
            inputEscolaridade: event.target.value,
        })
    }


    render() {

        const opcoesEscolaridade = ["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]
        return (
            <Container>
                <h2>Etapa 1 - Dados gerais</h2>
                <ol>
                    <PerguntaAberta pergunta="Qual o seu nome?" />
                    <PerguntaAberta pergunta="Qual sua idade? " />
                    <PerguntaAberta pergunta="Qual seu e-mail?" />
                    <PerguntaOpcoes pergunta="Qual sua escolaridade?" opcoes={opcoesEscolaridade} onChange={this.salvaEscolaridade} />
                </ol>
                <button onClick={() => this.props.botaoProximaEtapa(2, this.state.inputEscolaridade)}>Próxima etapa</button>
            </Container>
        )
    }
}

export default Etapa1;