import { useState, useEffect } from "react";
import { getMatches, clearMatches } from "../../services/Services";
import styled from "styled-components";
import { MdGroups, MdOutlineRestartAlt } from "react-icons/md"

export const ConfirmaReset = styled.div`
    width: 15vw;
    height: 14vh;
    background-color: gray;
    position: fixed;
    z-index: 2;
    /* background-color: rgba(166, 164, 165, 0.5); */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    const [matches, setMatches] = useState([]);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        listaMatches();
    }, []);

    const listaMatches = () => {
        getMatches().then((res) => {
            console.log(res.matches)
            setMatches(res.matches || [""])
        })
    }

    const listarMatches = matches.map((elemento, id) => {
        return <p key={id}>{elemento.name}</p>
    })

    const confirmaReset = () => {
        setReset(!reset);
    }

    const resetarMatches = () => {
        setReset(!reset);
        setMatches([]);
        clearMatches();
        setTimeout(() => { props.selecionarPessoa() }, 2000);
    }

    return (
        <div>Matches
            <MdGroups onClick={() => props.alterarTela("inicio")} />
            <MdOutlineRestartAlt onClick={confirmaReset} />
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