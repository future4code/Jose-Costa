import { useState, useEffect } from "react";
import { getMatches, clearMatches } from "../../services/Services";
import styled from "styled-components";

export const ConfirmaReset = styled.div`
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

const TelaMatches = (props) => {
    const [matches, setMatches] = useState({ matches: [] });
    const [reset, setReset] = useState(false);

    useEffect(() => {
        listaMatches();
    }, []);

    const listaMatches = () => {
        getMatches().then((res) => {
            setMatches(res)
        })
    }

    const listarMatches = matches.matches.map((elemento, id) => {
        return <p key={id}>{elemento.name}</p>
    })

    const confirmaReset = () => {
        setReset(!reset);
    }

    const resetarMatches = () => {
        setReset(!reset);
        setMatches({ matches: [] });
        clearMatches();
    }

    return (
        <div>Matches
            <button onClick={() => props.alterarTela("inicio")}>Voltar</button>
            <button onClick={confirmaReset}>Reset</button>
            {listarMatches}
            {reset && <ConfirmaReset>
                <PopUp>
                    <p>Confirma o reset?</p>
                    <button onClick={resetarMatches}>Sim</button>
                    <button onClick={confirmaReset}>Não</button>
                </PopUp>
            </ConfirmaReset>}
        </div>
    )
}

export default TelaMatches;