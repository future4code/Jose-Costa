import axios from "axios";
import React from "react";

import DeletarMusica from "./Musicas/DeletarMusica";
import DeletarPlaylist from "./DeletarPlaylist";

import { ContainerDetalhes, TituloContainer, ContainerLivre, ContainerPrincipalMusicas, ContainerMusicas, CardMusica, BotaoVoltar } from "./Styles/Style-DetalhesPlaylist";
import { MdPlayCircleFilled } from "react-icons/md";

class DetalhesPlaylist extends React.Component {
    state = {
        listaMusicas: [],
        quantidadeMusicas: "",
    }

    enviarMusicaAtual = (musica, artista, url) => {
        this.props.playerMusica(musica, artista, url);
    }

    componentDidMount = () => {
        this.detalharPlaylist();
    }

    detalharPlaylist = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({
                listaMusicas: res.data.result.tracks,
                quantidadeMusicas: res.data.result.quantity
            })
        }
        catch (err) {

        }
    }

    render() {
        let imagemPlaylist;
        return (
            <ContainerDetalhes>
                <ContainerLivre>
                    {this.state.quantidadeMusicas === 0 ? <p></p> : <p>Total de músicas: {this.state.quantidadeMusicas}</p>}
                    <BotaoVoltar onClick={() => this.props.alterarPagina("playlists")}>Voltar</BotaoVoltar>
                    <DeletarPlaylist idPlaylist={this.props.idPlaylist} alterarPagina={() => this.props.alterarPagina("playlists")} alteraPagina={1} />
                </ContainerLivre>
                <TituloContainer> Playlist: {this.props.nomePlaylist}</TituloContainer>
                <ContainerPrincipalMusicas>
                {this.state.quantidadeMusicas === 0 && <p>Você pode adicionar suas músicas preferidas aqui. Conheça novas músicas no menu "Explorar".</p> }
                    <ContainerMusicas>
                        {this.state.listaMusicas.map((elemento, id) => {
                            console.log(elemento)
                            imagemPlaylist = `https://loremflickr.com/200/200/music?lock=${this.props.idArrayPlaylist + id}`
                            return (
                                <CardMusica key={elemento.id}>
                                    <img src={imagemPlaylist} alt="Imagem da Música" />
                                    <p onClick={() => this.enviarMusicaAtual(elemento.name, elemento.artist, elemento.url)}>{elemento.name} - {elemento.artist} </p>
                                    <MdPlayCircleFilled onClick={() => this.enviarMusicaAtual(elemento.name, elemento.artist, elemento.url)} />
                                    <DeletarMusica idMusica={elemento.id} idPlaylist={this.props.idPlaylist} atualizarLista={this.detalharPlaylist} />
                                </CardMusica>
                            )
                        })}

                    </ContainerMusicas>
                </ContainerPrincipalMusicas>
            </ContainerDetalhes>
        )
    }
}

export default DetalhesPlaylist;