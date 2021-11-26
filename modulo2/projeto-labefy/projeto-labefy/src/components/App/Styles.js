import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #030303;
`

export const ContainerHeader = styled.div`
  display: flex;
  height: 7vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1e1e1e;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: start;
  cursor: pointer;

  img {
    height: 6vh;
    padding-left: 1vw;
  }

  h3 { 
    text-indent: 1vw;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;

  button {
    background-color: #030303;
    color: gray;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    margin: 1vw;
    cursor: pointer;
  }
`

export const ContainerMain = styled.div`
    height: 92.8vh;
`

export const ContainerFooter = styled.div`
  display: flex;
  height: 8vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`