import React from "react";
import axios from "axios";

import ListaMusicas from "../Explorar/ListaMusicas";
import AdicionarMusicas from "../Playlists/Musicas/AdicionarMusicas";

import { ContainerPrincipalMusicas, ContainerMusicas, TituloContainer, ContainerLivre, CardMusica, TituloMusica, TextoMostrarMusicas, ContainerPlaylist, ContainerCardPlaylist, CardPlaylist, CardImagem, ImagemFundo, ImagemPlay, ContainerIrParaPlaylists } from "./Styles/Style-Inicio";
import { MdPlayCircleFilled } from "react-icons/md";
 
class Inicio extends React.Component {
    state = {
        musicasQueTal: "",
        listaPlaylists: [],
    }

    componentDidMount = () => {
        this.pegarMusicasQueTal();
        this.listarPlaylists();
    }

    listarPlaylists = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({ listaPlaylists: res.data.result.list })
        }
        catch (err) {

        }
    }

    pegarMusicasQueTal = () => {
        const numeroAleatorio = Math.floor(Math.random() * 50)
        this.setState({
            musicasQueTal: numeroAleatorio,
        })
    }

    enviarMusicaAtual = (musica, artista, url) => {
        this.props.playerMusica(musica, artista, url);
    }

    render() {
        let imagemMusica;
        let imagemPlaylist;
        return (
            <div>
                <ContainerLivre>
                    <p>Boas vindas!</p>
                </ContainerLivre>
                <TituloContainer>
                    Que tal? :)
                </TituloContainer>
                <ContainerPrincipalMusicas>
                    <ContainerMusicas>
                        {ListaMusicas.filter((elemento, id) => {
                            return id > this.state.musicasQueTal && id < this.state.musicasQueTal + 4;
                        }).map((elemento, id) => {
                            imagemMusica = `https://loremflickr.com/200/200/music?lock=${id + this.state.musicasQueTal}`;
                            return (
                                <CardMusica>
                                    <img src={imagemMusica} alt="Imagem da Música" onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <TituloMusica onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)}>{elemento.nome} - {elemento.artista}</TituloMusica>
                                    <MdPlayCircleFilled onClick={() => this.enviarMusicaAtual(elemento.nome, elemento.artista, elemento.url)} />
                                    <AdicionarMusicas nome={elemento.nome} artista={elemento.artista} url={elemento.url} />
                                </CardMusica>
                            )
                        })}
                    </ContainerMusicas>

                    <TextoMostrarMusicas onClick={() => this.props.alterarPagina("explorar")}> Ver todas as músicas »</TextoMostrarMusicas>
                </ContainerPrincipalMusicas>
                <TituloContainer>{this.state.listaPlaylists.length ? "Suas playlists preferidas:" : "Crie playlists personalizadas:"}</TituloContainer>
                <ContainerPlaylist>
                    <ContainerCardPlaylist>
                        {this.state.listaPlaylists.length ? this.state.listaPlaylists.filter((elemento, id) => {
                            return id < 5;
                        }).map((elemento, id) => {
                            imagemPlaylist = `https://picsum.photos/id/${id + 50}/200/300`
                            return (
                                <CardPlaylist key={id}>
                                    <CardImagem>
                                        <ImagemFundo src={imagemPlaylist} alt="Imagem Playlist" onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)} />
                                        <span onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)}>{elemento.name}</span>
                                        <ImagemPlay onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)} src="https://toppng.com/uploads/preview/white-play-icon-claims-adjuster-11553399850utg0lolmob.png" alt="Imagem do Play" />
                                    </CardImagem>

                                </CardPlaylist>
                            )
                        }) : <TextoMostrarMusicas>Acesse o menu Playlists e organize suas músicas preferidas.</TextoMostrarMusicas>}
                    </ContainerCardPlaylist>
                </ContainerPlaylist>
                <ContainerIrParaPlaylists>
                    <TextoMostrarMusicas onClick={() => this.props.alterarPagina("playlists")}> Ir para biblioteca de Playlists »</TextoMostrarMusicas>
                </ContainerIrParaPlaylists>

            </div>
        )
    }
}

export default Inicio;