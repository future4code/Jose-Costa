import { useState, useEffect } from "react";
import { getMatches, clearMatches } from "../../services/Services";
import { MdGroups, MdOutlineRestartAlt, MdDoneOutline, MdClose, MdOutlineSms } from "react-icons/md"
import * as C from "./Style";

const TelaMatches = (props) => {
    const [matches, setMatches] = useState([]);
    const [reset, setReset] = useState(false);
    const [iniciarChat, setIniciarChat] = useState(false);

    useEffect(() => {
        listaMatches();
    }, []);

    const listaMatches = () => {
        getMatches().then((res) => {
            console.log(res.matches)
            setMatches(res.matches || [""])
        })
    }

    const confirmaChat = () => {
        setIniciarChat(!iniciarChat);
    }

    const listarMatches = matches.map((elemento, id) => {
        console.log(elemento)
        return (
            <C.CardMatches key={id}>
                <div>
                    <C.CardImagem imagem={elemento.photo} />
                    <p><b>{elemento.name}</b></p>
                </div>
                <MdOutlineSms onClick={confirmaChat} />
                {iniciarChat && <C.ConfirmaReset>
                    <C.PopUp>
                        <p>Deseja ir para o bate-papo?</p>
                        <div>
                            <a href="https://jrvc-whatslab.surge.sh/" target="_blank" rel="noreferrer"><MdDoneOutline onClick={confirmaChat}/></a>
                            <MdClose onClick={confirmaChat} />
                        </div>
                    </C.PopUp>
                </C.ConfirmaReset>}
            </C.CardMatches>
        )
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
        <div>
            <C.Header>
                <C.Logo><p>astro·<strong>match</strong></p><span>❤</span></C.Logo>
                <C.Icones>
                    <MdOutlineRestartAlt onClick={confirmaReset} />
                    <MdGroups onClick={() => props.alterarTela("inicio")} />
                </C.Icones>
            </C.Header>
            <C.ContainerMatch>
                {listarMatches}
            </C.ContainerMatch>

            {reset && <C.ConfirmaReset>
                <C.PopUp>
                    <p>Confirma o reset de swipes e matches?</p>
                    <div>
                        <MdDoneOutline onClick={resetarMatches} />
                        <MdClose onClick={confirmaReset} />
                    </div>
                </C.PopUp>
            </C.ConfirmaReset>}
        </div>
    )
}

export default TelaMatches;