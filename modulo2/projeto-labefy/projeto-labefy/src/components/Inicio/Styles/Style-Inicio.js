import styled from "styled-components";

export const ContainerPrincipalMusicas = styled.div`
    background-color: #030303;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerMusicas = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
    justify-content: end;
`

export const CardMusica = styled.div`
    display: flex;
    justify-content: space-around;
    width: 25vw;
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

export const ContainerPlaylist = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`


export const ContainerCardPlaylist = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 5vh;
    background-color: #030303;
    padding-bottom: 10vh;
`

export const CardPlaylist = styled.div` 
    display: flex;
    width: 15vw;
    flex-direction: column;
    margin-right: 3vw;
    margin-bottom: 1vw;
    background-color: #030303;
    border-radius: 10px;
`

export const CardImagem = styled.div`
     display: flex;
     justify-content: center;
     position: relative;
     height: 5vw;
     cursor: pointer;

    span {
        position: absolute;
        color:  #030303;
        font-size: 1rem;
        left: 0px;
        top: 5px;
        font-weight: bold;
        margin-left: 0.7vw;
        text-shadow: 1px 1px white;
    }
`

export const ImagemFundo = styled.img`
        border-radius: 10px;
        position: absolute;
        width: 15vw;
        height: 5vw;
        object-fit: cover;
`

export const ImagemPlay = styled.img`
    position: absolute;
    height: 4vh;
    padding: 2px;
    border-radius: 60%;
    bottom: 0px;
    right: 0px;
`

export const ContainerIrParaPlaylists = styled.div`
    padding-top: 1vh;
    width: 100vw;
    display: flex;
    justify-content: end;
`