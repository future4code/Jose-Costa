import axios from "axios";
import React from "react";
import DeletarMusica from "./DeletarMusica";

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
        console.log("b")
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
            console.log(err.response.data)
        }
    }

    render() {
        return (
            <div>
                <div>
                    Playlist: {this.props.nomePlaylist}
                    {this.state.listaMusicas.map((elemento, id) => {
                        return (
                            <div key={elemento.id}>
                                Artista: {elemento.artist} - Música: {elemento.name} 
                                <button onClick={() => this.enviarMusicaAtual(elemento.name, elemento.artist, elemento.url)}>Escutar</button>
                                <DeletarMusica idMusica={elemento.id} idPlaylist={this.props.idPlaylist} atualizarLista={this.detalharPlaylist} />
                            </div>
                        )
                    })}

                    {this.state.quantidadeMusicas === 0 ? <p></p> : <p>Total de músicas: {this.state.quantidadeMusicas}</p>}
                </div>
            </div>
        )
    }
}

export default DetalhesPlaylist;