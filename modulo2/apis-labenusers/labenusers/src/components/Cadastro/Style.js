import styled from "styled-components";

export const ContainerCadastro = styled.div`
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