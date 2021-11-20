import axios from "axios";
import React from "react";
import styled from "styled-components";

import { MdQueue } from "react-icons/md";

const ContainerAdicionarMusicas = styled.div`
    width: 15vw;
    height: 14vh;
    background-color: gray;
    position: fixed;
    z-index: 2;
    background-color: rgba(10,23,55,0.10);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 30vw;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
    }
`

class AdicionarMusicas extends React.Component {
    state = {
        conf: false,
        statusMsg: "",
        listaPlaylists: [],
        playlistSelecionada: "",
        musicasPlaylistSelecionada: [],
    }

    abrirAdicionarMusicas = () => {
        this.setState({
            conf: !this.state.conf,
            statusMsg: ""
        })
    }

    salvarPlaylistSelecionada = (e) => {
        this.setState({ playlistSelecionada: e.target.value })
        this.detalharPlaylist();
    }

    componentDidMount = () => {
        this.listarPlaylists();
        this.detalharPlaylist();
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

    adicionarMusicas = async () => {
         let verificarExistencia = false;
        const verificarDuplicidade = this.state.musicasPlaylistSelecionada.filter((elemento) => {
            if (elemento.url === this.props.url) {
                verificarExistencia = true;
            }
        })
        if (!this.state.playlistSelecionada) {
            this.setState({ statusMsg: "Adicione uma playlist válida." })
        } else if (verificarExistencia) {
                this.setState({ statusMsg: "Essa música já está nessa playlist." })
        } else {

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`
            const body = {
                name: this.props.nome,
                artist: this.props.artista,
                url: this.props.url,
            }
            try {
                const res = await axios.post(url, body, {
                    headers: {
                        Authorization: "jose-rodolfo-carver",
                    }
                })
                this.setState({
                    statusMsg: "Música adicionada com sucesso!"
                })
                this.detalharPlaylist();
            }
            catch (err) {
                this.setState({
                    statusMsg: "Erro!",
                })
                this.detalharPlaylist();
            }
            setTimeout(this.abrirAdicionarMusicas, 5000)
        }
    }

    detalharPlaylist = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({ musicasPlaylistSelecionada: res.data.result.tracks })
        }
        catch (err) {

        }
    }

    render() {
        return (
            <div>
                <MdQueue onClick={this.abrirAdicionarMusicas} />
                {this.state.conf &&
                    <ContainerAdicionarMusicas>
                        <div>
                            <select onChange={this.salvarPlaylistSelecionada}>
                                <option value={false}>Selecione uma playlist:</option>
                                {this.state.listaPlaylists.map((elemento) => {
                                    return <option value={elemento.id}>{elemento.name}</option>
                                })}
                            </select>
                            {this.state.statusMsg}
                            <button onClick={this.adicionarMusicas}>Adicionar</button>
                            <button onClick={this.abrirAdicionarMusicas}>X</button>
                        </div>
                    </ContainerAdicionarMusicas>
                }
            </div>
        )
    }
}

export default AdicionarMusicas;