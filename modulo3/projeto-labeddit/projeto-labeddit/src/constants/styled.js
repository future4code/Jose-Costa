import styled from "styled-components";

export const Titulo = styled.h2`
    background-color: #6b6b6b;
    color white;
    padding: 5px;
`

export const Centralizado = styled.div`
    width: 350px;
    text-align: center;
`

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh; 
    display: flex;
    justify-content: center;
`

export const Main = styled.div`
    width: 500px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`

export const MainContainer1 = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const MainContainer2 = styled.div`
    margin-top: 100px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Link = styled.span`
    cursor: pointer;
    font-style: italic;
`