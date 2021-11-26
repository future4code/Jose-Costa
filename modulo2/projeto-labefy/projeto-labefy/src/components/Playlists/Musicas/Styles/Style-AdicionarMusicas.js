import styled from "styled-components";

export const ContainerAdicionarMusicas = styled.div`
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
    padding: 0 1vw 1vw 1vw;
    width: 30vw;
    height: auto;
    background-color: #030303;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 1px 5px 5px #030303;

    p {
        text-align: center;
        width: 30vw;
        color: white;
        font-size: 0.9rem;
    }

    select {
        background-color: #030303;
        color: gray;
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
`

export const Select = styled.select`
    border: none;
    background-color: gray;
    outline: none;
`