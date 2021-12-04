import { useState } from "react";
import { choosePerson } from "../../services/Services";
import styled from "styled-components";
import { BsFillPersonCheckFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineCloseSquare } from "react-icons/ai";
import { IoHeartCircleOutline, IoHeartDislikeCircleOutline } from "react-icons/io5";


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

const Header = styled.header`
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

    svg {
        font-size: 30px;
        cursor: pointer;
        padding-right: 4px;
    }

    svg:hover {
        color: #3e3e3e;
    }
`

const Logo = styled.div`
        display: flex;
        font-size: 20px;
        padding-left: 4px;
        transition: all 8s;

        span {
            display: none;
        }
        
    &:hover {
        transform: translate(50px);

        p {
            transition: all 8s;
            padding-right: 30px;
        }
        
        span {
            transition: all 8s;
            display: inline;
        }
    }
`

const ContainerMatch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImagemPerfil = styled.div`
    margin-top: 15px;
    position: relative;
    width: 90%;
    height: 430px;
    background-image: url(${props => props.imagem});
    background-size: cover;
    background-position: top;
    filter: grayscale(${props => props.grayscale === false ? "1" : "none"});
    border-radius: 10px;
    transition: all 1s;
`

const InfosPerfil = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: end;
`

const PerfilTitulo = styled.span`
    font-size: 25px;
    text-align: center;
    background-color: rgba(1, 5, 5, 0.5);
`

const PerfilBio = styled.span`
    font-size: 15px;
    background-color: rgba(1, 5, 5, 0.5);
    padding: 10px;
    border-radius: 0px 0px 15px 15px;
`

const BotaoMatch = styled.span`
    font-size: 15px;
    text-align: center;
    background-color: rgba(60, 179, 94, 0.8);
    padding: 20px;
    border-radius: 0px 0px 13px 14px;
`

const ContainerBotoes = styled.div`
    width: 100%;
    display: flex;
    color: ${props => props.status ? "black" : "#d1d1d1"};
    justify-content: space-evenly;

    svg {
        font-size: 40px;
        cursor: ${props => props.status ? "pointer" : "auto"};
        transition: all 5s;
    }

    svg:hover {
        transform: rotate(360deg);
    }
`

const TelaInicial = (props) => {
    const [statusMatch, setStatusMatch] = useState(false);
    const [statusBotoes, setStatusBotoes] = useState(true);
    const [isMatch, setIsMatch] = useState("")

    const escolherPessoa = (id, escolha) => {
        console.log(escolha)
        setStatusBotoes(false);
        if (escolha === true) {
            setStatusMatch(true);
            setTimeout(() => { setStatusMatch(false); setIsMatch(false); props.selecionarPessoa(); }, 5000);
            setTimeout(() => { setStatusBotoes(true) }, 6000);
            choosePerson(id, escolha).then((res) => {
            })
        } else if (escolha === false) {
            setStatusMatch(false);
            props.selecionarPessoa();
            setStatusBotoes(true);
            choosePerson(id, escolha).then((res) => {
                
            })
        }
    }

    const verificarMatch = () => {
        console.log("status", statusMatch)
        if (statusMatch === true) {
            console.log("isso")

        } else if (statusMatch === false) {

        }
    }

    const exibirInfos = () => {
        if (props.pessoa === null) {
            return <p>Sem pessoa disponível no momento.</p>
        } else {
            return (
                <ContainerMatch>
                    {props.pessoa === false && <p>Carregando...</p>}
                    {statusMatch === false ?
                        <ImagemPerfil imagem={props.pessoa.photo} grayscale={false}>
                            <InfosPerfil>
                                <PerfilTitulo>{props.pessoa.name}<span style={{ color: "black" }}>,</span> {props.pessoa.age}</PerfilTitulo>
                                <PerfilBio>{props.pessoa.bio}</PerfilBio>
                            </InfosPerfil>
                        </ImagemPerfil>
                        : <ImagemPerfil imagem={props.pessoa.photo} grayscale={true}>
                            <InfosPerfil>
                                <PerfilTitulo>{props.pessoa.name}<span style={{ color: "black" }}>,</span> {props.pessoa.age}</PerfilTitulo>
                                <PerfilBio>{props.pessoa.bio}</PerfilBio>
                            </InfosPerfil>
                        </ImagemPerfil>}
                    <ContainerBotoes status={statusBotoes}>
                        {statusBotoes === false ? <IoHeartCircleOutline /> : <IoHeartCircleOutline onClick={() => escolherPessoa(props.pessoa.id, true)} />}
                        {statusBotoes === false ? <IoHeartDislikeCircleOutline /> : <IoHeartDislikeCircleOutline onClick={() => escolherPessoa(props.pessoa.id, false)} />}
                    </ContainerBotoes>
                </ContainerMatch>
            )
        }
    }

    return (
        <div>
            <Header>
                <Logo><p>astro·<strong>match</strong></p><span>❤</span></Logo>
                <BsFillPersonCheckFill onClick={() => props.alterarTela("matches")} />
            </Header>
            {exibirInfos()}
        </div >
    )
}

export default TelaInicial;