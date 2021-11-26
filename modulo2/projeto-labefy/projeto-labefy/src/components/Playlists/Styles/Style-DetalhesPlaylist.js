import styled from "styled-components";

export const ContainerDetalhes = styled.div`
    background-color: #030303;
`

export const TituloContainer = styled.h2`
    align-self: start;
    color: white;
    text-indent: 4vw;
`

export const ContainerLivre = styled.div`
    width: 97vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: gray;
`

export const ContainerPrincipalMusicas = styled.div`
    background-color: #030303;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerMusicas = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10vh;
`

export const CardMusica = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30vw;
    height: 10vh;
    align-items: center;
    text-indent: 0.5vw;
    cursor: pointer;

    p {
        width: 20vw;
        margin-right: 1vw;
        color: gray;
    }
    p:hover {
        color: white;
    }
    img {
        height: 7vh;
        border-radius: 100px;
    }
`

export const BotaoVoltar = styled.p`
    color: gray;
    cursor: pointer;

    &:hover {
        color: white;
    }
`
