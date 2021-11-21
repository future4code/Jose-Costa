import styled from "styled-components";

export const ContainerCardPlaylist = styled.div`
    padding: 0 3vw 0 7vw;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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
     height: 10vw;
     cursor: pointer;

    h3 {
        position: absolute;
        color:  #030303;
        margin: 1vw;
        align-self: center;
        align-items: center;
        font-size: 1.1rem;
    }

    p {
        position: absolute;
        padding: 0.2vw;
        left: 2px;
        background-color: #1e1e1e;
        color: white;
        opacity: 50%;
        border-radius: 5px;
    }
`

export const ImagemFundo = styled.img`
        border-radius: 10px;
        position: absolute;
        width: 15vw;
        height: 10vw;
        object-fit: cover;

`
export const ImagemPlay = styled.img`
    position: absolute;
    height: 7vh;
    opacity: 30%;
    bottom: 5px;
    right: 2px;
    padding: 2px;
    border-radius: 60%;

    &:hover {
        opacity: 120%;
    }
`

export const InfoPlaylist = styled.div`
    display: flex;
    color: gray;
    align-items: center;
    justify-content: space-around;
    font-size: 0.8rem;
    cursor: pointer;

    p:hover {
        color: white;
    }

    div:hover {
        color: white;
    }
    div {
        font-size: 1.3rem;
    }
`
