import React from "react";
import PerguntaAberta from "../Perguntas/PerguntaAberta";
import PerguntaOpcoes from "../Perguntas/PerguntaOpcoes";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

class Etapa2Medio extends React.Component {
    render() {
        const opcoesCursos = ["Curso técnico", "Curso de inglês", "Não fiz curso complementar"];
        return (
            <Container>
                <h2>Etapa 2 - Informações educacionais</h2>
                <ol>
                    <PerguntaAberta pergunta="Por que você não terminou um curso de graduação?" />
                    <PerguntaOpcoes pergunta="Você fez algum curso complementar?" opcoes={opcoesCursos} onChage="" />
            </ol>
            <button onClick={() => this.props.botaoProximaEtapa(3, this.props.escolaridade)}>Próxima etapa</button>
        </Container>
        )
    }
}

export default Etapa2Medio;