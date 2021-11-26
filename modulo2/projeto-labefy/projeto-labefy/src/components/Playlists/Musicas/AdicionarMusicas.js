import axios from "axios";
import React from "react";

import { ContainerAdicionarMusicas, PopUp, ContainerBotoes, BotaoFechar, MensagemConfirmacao, Select } from "./Styles/Style-AdicionarMusicas";
import { MdQueue } from "react-icons/md";

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
                        <PopUp>
                            <BotaoFechar onClick={this.abrirAdicionarMusicas}>✖️</BotaoFechar>
                            <p>Adicione a música na playlist desejada:</p>
                            <Select onChange={this.salvarPlaylistSelecionada}>
                                <option value={false}>Selecione uma playlist:</option>
                                {this.state.listaPlaylists.map((elemento) => {
                                    return <option value={elemento.id}>{elemento.name}</option>
                                })}
                            </Select>
                            <ContainerBotoes>
                                <button onClick={this.adicionarMusicas}>Adicionar</button>
                            </ContainerBotoes>
                            <MensagemConfirmacao>{this.state.statusMsg}</MensagemConfirmacao>
                        </PopUp>
                    </ContainerAdicionarMusicas>
                }
            </div>
        )
    }
}

export default AdicionarMusicas;