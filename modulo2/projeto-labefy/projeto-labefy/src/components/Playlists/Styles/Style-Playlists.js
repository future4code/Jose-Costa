import styled from "styled-components";

export const ContainerPlaylist = styled.div`
    background-color: #030303;
`

export const TituloContainer = styled.h2`
    align-self: start;
    color: white;
    text-indent: 4vw;
`

export const ContainerNovaPlaylist = styled.div`
    width: 97vw;
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 3vw;
    justify-content: center;
    color: gray;
    cursor: pointer;

    &:hover {
        color: white;
    }

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

export const NovaPlaylist = styled.p`
    text-indent: 4vw;
`

export const ContainerListas = styled.div`
    display: flex;
    justify-content: center;
`