import { useState } from "react";
import { choosePerson } from "../../services/Services";
import styled from "styled-components";

export const Match = styled.div`
    width: 15vw;
    height: 14vh;
    background-color: gray;
    position: fixed;
    z-index: 2;
    background-color: rgba(166, 164, 165, 0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUp = styled.div`
    padding: 0 1vw 1vw 1vw;
    width: 25vw;
    height: auto;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 1px 5px 5px #030303;
    p {
        font-size: 0.9rem;
    }
`

const TelaInicial = (props) => {
    const [statusMatch, setStatusMatch] = useState(false);

    const escolherPessoa = (id, escolha) => {
        choosePerson(id, escolha).then((res) => {
            verificarMatch(res.isMatch);
            console.log(res.isMatch)
        })
    }

    const verificarMatch = (res) => {
        if (res === true) {
            setStatusMatch(true)
        }
        setTimeout(() => { props.selecionarPessoa(); setStatusMatch(false) }, 2000);
    }

    return (
        <div>
            {statusMatch && <Match><PopUp>Match!!!</PopUp></Match>}
            <button onClick={() => props.alterarTela("matches")}>Matches</button>
            <button onClick={() => escolherPessoa(props.pessoa.id, false)}>Deslike</button>
            <button onClick={() => escolherPessoa(props.pessoa.id, true)}>Like</button>
            <p>{props.pessoa.name}</p>
            <img src={props.pessoa.photo} alt="Foto do Profile" />
            <p>{props.pessoa.bio}</p>
        </div>
    )
}

export default TelaInicial;