import React from "react";
import ListaMusicas from "./ListaMusicas";
import AdicionarMusicas from "../Playlists/Musicas/AdicionarMusicas";

import { ContainerExplorar, TituloContainer, ContainerBusca, ContainerPrincipalMusicas, ContainerMusicas, CardMusica, TituloMusica, TextoMostrarMusicas } from "./Styles/Style-Explorar";
import { MdSearch } from "react-icons/md";
import { MdPlayCircleFilled } from "react-icons/md";

class Explorar extends React.Component {
    state = {
        inputBusca: "",
        abrirBusca: false,
        numeroMenor: "",
        numeroMaior: "",
    }

    componentDidMount = () => {
        this.mostrarMenos();
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

    mostrarTodas = () => {
        this.setState({
            numeroMenor: 0,
            numeroMaior: 100,
        })
    }

    mostrarMenos = () => {
        const numeroMenor = Math.floor(Math.random() * 44)
        const numeroMaior = numeroMenor + 16
        this.setState({
            numeroMenor: numeroMenor,
            numeroMaior: numeroMaior,
        })
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
                        {ListaMusicas.filter((elemento) => {
                            return elemento.nome.toLowerCase().includes(this.state.inputBusca.toLowerCase()) || elemento.artista.toLowerCase().includes(this.state.inputBusca.toLowerCase());
                        }).filter((elemento, id, array) => {
                            if (this.state.inputBusca.length > 1) {
                                return array;
                            } else {
                                return id > this.state.numeroMenor && id < this.state.numeroMaior;
                            }
                        }).map((elemento, id) => {
                            imagemMusica = `https://loremflickr.com/200/200/music?lock=${id + this.state.numeroMenor}`;
                            return (
                                <CardMusica>
                                    <img src={imagemMusica} alt="Imagem da Música" onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <TituloMusica onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)}>{elemento.nome} - {elemento.artista}</TituloMusica>
                                    <MdPlayCircleFilled onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <AdicionarMusicas nome={elemento.nome} artista={elemento.artista} url={elemento.url} />
                                </CardMusica>
                            )
                        })
                        }
                    </ContainerMusicas>
                    {this.state.numeroMenor !== 0 && <TextoMostrarMusicas onClick={this.mostrarTodas}> Ver todas as músicas »</TextoMostrarMusicas>}
                    {this.state.numeroMenor === 0 && <TextoMostrarMusicas onClick={this.mostrarMenos}> Ver menos »</TextoMostrarMusicas>}
                    <p></p>
                    <p></p>
                </ContainerPrincipalMusicas>
            </ContainerExplorar>
        )
    }
}

export default Explorar;