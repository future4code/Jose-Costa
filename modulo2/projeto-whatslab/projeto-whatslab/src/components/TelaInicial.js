import React from "react";
import styled from "styled-components";

const InicialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100vh;
    background-color: #f1f1f1;
    color: #3c3d68;
`

const TextoInicial = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
`
const InicialImagem = styled.img`
    height: 50vh;
`
const TelaInicial = () => {
    return (
        <InicialContainer>
            <TextoInicial>
                <h2>WhatsLab :)</h2>
                <h3>Uma forma simples de bater papo.</h3>

                <p>Inicie uma nova conversa ou  adicione um</p>
                    <p>novo contato no menu ao lado. Bom papo!</p>
            </TextoInicial>
            <InicialImagem src="https://www.pinclipart.com/picdir/big/126-1264030_quality-assurance-for-zendesk-chat-and-support-quality.png"></InicialImagem>
        </InicialContainer>
    )
}

export default TelaInicial;