import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  font-family: Verdana;
  font-size: 0.8rem;
`

export const ContainerCentral = styled.div`
  width: 30vw;
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerMenu = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid orange;

  button {
    font-weight: bold;
    font-size: 1rem;
    margin: 1vw;
    cursor: pointer;
    border: none;
    background-color: white;
  }

  button:hover {
    color: orange;
  }
  `

export const ContainerMain = styled.div`
  height: auto;
`