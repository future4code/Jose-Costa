import styled from "styled-components";


export const ContainerExplorar = styled.div`
    background-color: #030303;
`

export const TituloContainer = styled.h2`
    align-self: start;
    color: white;
    text-indent: 4vw;
`

export const ContainerBusca = styled.div`
    width: 97vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: end;

    input {
        background-color: #1e1e1e;
        border: none;
        width: 20vw;
        height: 5vh;
        color: white;
        outline: none;
        padding: 1vh;
        border-radius: 10px;
    }
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
`

export const CardMusica = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30vw;
    height: 10vh;
    align-items: center;
    text-indent: 0.5vw;
    cursor: pointer;

    img {
        height: 7vh;
        border-radius: 50px;
    }
`

export const TituloMusica = styled.p`
        width: 20vw;
        margin-right: 1vw;
        color: gray;
        
    &:hover {
        color: white;
    }
`
export const TextoMostrarMusicas = styled.p`
    cursor: pointer;
    align-self: end;
    color: gray;
    padding-right: 4vw;
`