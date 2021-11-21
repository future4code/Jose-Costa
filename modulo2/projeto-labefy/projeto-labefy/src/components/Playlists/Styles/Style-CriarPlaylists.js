import styled from "styled-components"

export const ContainerCriarPlaylist = styled.div`
    width: 15vw;
    height: 14vh;
    background-color: gray;
    position: fixed;
    z-index: 2;
    background-color: rgba(166, 164, 165, 0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUp = styled.div`
    padding: 0 1vw 2vw 1vw;
    width: 28vw;
    height: auto;
    background-color: #030303;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 1px 5px 5px #030303;
`

export const Formulario = styled.label`
    display: flex;
    flex-direction: column;

    input {
        margin-top: 1vw;
    }
`

export const ContainerBotoes = styled.div`
    margin: 1vw;
    display: flex;

    button {
        background-color: black;
        border: none;
        color: gray;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        color: white;
    }
`

export const BotaoFechar = styled.span`
    align-self: end;
    padding-bottom: 1vw;
`

export const MensagemConfirmacao = styled.span`
    color: gray;
    font-size: 0.8rem;
`