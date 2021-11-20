import React from "react";
import ListaMusicas from "./ListaMusicas";
import AdicionarMusicas from "../Playlists/AdicionarMusicas";

import styled from "styled-components";

import { MdSearch } from "react-icons/md";
import { MdPlayCircleFilled } from "react-icons/md";


const ContainerExplorar = styled.div`

`

const TituloContainer = styled.h2`
    color: white;
    text-indent: 4vw;
`

const ContainerBusca = styled.div`
    width: 97vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: end;

    input {
        background-color: #1e1e1e;
        border: none;
        width: 20vw;
        height: 5vh;
        color: white;
        outline: none;
        padding: 1vh;
        border-radius: 10px;
    }
`

const ContainerPrincipalMusicas = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerMusicas = styled.div`
    width: 96vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const CardMusica = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30vw;
    height: 10vh;
    align-items: center;
    text-indent: 0.5vw;
    cursor: pointer;

    p {
        width: 20vw;
        margin-right: 1vw;
        color: gray;
    }
    p:hover {
        color: white;
    }
    img {
        height: 7vh;
        border-radius: 50px;
    }
`

class Explorar extends React.Component {
    state = {
        inputBusca: "",
        abrirBusca: true,
    }

    enviarMusicaAtual = (musica, artista, url) => {
        this.props.playerMusica(musica, artista, url);
    }

    alteraBusca = (e) => {
        this.setState({ inputBusca: e.target.value })
    }

    abrirBusca = () => {
        this.setState({ abrirBusca: !this.state.abrirBusca })
    }

    render() {
        let imagemMusica;
        return (
            <ContainerExplorar>
                <ContainerBusca>

                    {this.state.abrirBusca && <input placeholder="Busque músicas ou artistas" onChange={this.alteraBusca} value={this.state.inputBusca} />}
                    <MdSearch onClick={this.abrirBusca} style={{ width: "30px", cursor: "pointer" }} />
                </ContainerBusca>

                <TituloContainer>Explore novidades:</TituloContainer>
                <ContainerPrincipalMusicas>                 
                    <ContainerMusicas>
                        {ListaMusicas.filter((elemento, id) => {
                            return elemento.nome.toLowerCase().includes(this.state.inputBusca.toLowerCase()) || elemento.artista.toLowerCase().includes(this.state.inputBusca.toLowerCase());
                        }).filter((elemento, id) => {
                            return id < 15;
                        }).map((elemento, id) => {
                            imagemMusica = `https://loremflickr.com/200/200/music?lock=${id + 1}`;
                            return (
                                <CardMusica>
                                    <img src={imagemMusica} alt="Imagem da Música" onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <p onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)}>{elemento.nome} - {elemento.artista}</p>
                                    <MdPlayCircleFilled onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <AdicionarMusicas nome={elemento.nome} artista={elemento.artista} url={elemento.url} />
                                </CardMusica>
                            )
                        })
                        }
                    </ContainerMusicas>
                </ContainerPrincipalMusicas>
            </ContainerExplorar>
        )
    }
}

export default Explorar;