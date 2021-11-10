import React from "react";
import PerguntaAberta from "../Perguntas/PerguntaAberta";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

class Etapa2Superior extends React.Component {
    render() {
        return (
            <Container>
                <h2>Etapa 2 - Informações educacionais</h2>
                <ol>
                    <PerguntaAberta pergunta="Qual o curso?" />
                    <PerguntaAberta pergunta="Qual a unidade de ensino?" />
                </ol>
                <button onClick={() => this.props.botaoProximaEtapa(3, this.props.escolaridade)}>Próxima etapa</button>
            </Container>
        )
    }
}

export default Etapa2Superior;