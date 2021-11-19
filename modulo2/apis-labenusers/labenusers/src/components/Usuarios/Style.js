import styled from "styled-components"

export const ContainerUsuarios = styled.div`
    display: flex;
    flex-direction: column;

    input {
        border: none;
        border-bottom: 1px solid orange;
        margin: 2vh;
        text-align: center;
        outline: none;
      }

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

export const ContainerBusca = styled.div`
    display: flex;
`

export const ContainerResultados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        cursor: pointer;
    }

    p:hover {
        color: orange;
    }
`

export const TextoCentralizado = styled.p`
        text-align: center;
`