import React from "react";
import axios from "axios";

import { ContainerCriarPlaylist, PopUp, Formulario, ContainerBotoes, BotaoFechar, MensagemConfirmacao } from "./Styles/Style-CriarPlaylists";

class CriarPlaylists extends React.Component {
    state = {
        inputNome: "",
        statusPlaylist: false,
        statusMsg: "",
    }

    salvaNomePlaylist = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    criarPlaylist = async () => {
        if (this.state.inputNome.length > 21) {
            this.setState({ 
                statusPlaylist: true,
                statusMsg: "Máximo de caracteres: 22." })
        } else {
            this.setState({ statusMsg: "Adicionando..." })
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const body = {
                name: this.state.inputNome,
            }
            try {
                const res = await axios.post(url, body, {
                    headers: {
                        Authorization: 'jose-rodolfo-carver'
                    }
                })
                this.setState({
                    inputNome: "",
                    statusPlaylist: true,
                    statusMsg: "Playlist adicionada com sucesso!"
                })
            }
            catch (err) {
                if (err.response.data.message === "There already is a playlist with a similiar name.") { err.response.data.message = "Já existe uma playlist com esse nome." }
                if (err.response.data.message === "Name or auth token are missing") { err.response.data.message = "Adicione o nome da playlist." }
                this.setState({
                    statusPlaylist: true,
                    statusMsg: err.response.data.message,
                })
            }
        }
    }

    fecharCriarPlaylists = () => {
        this.setState({
            inputNome: "",
            statusPlaylist: false,
            statusMsg: "",
        })
        this.props.fecharCriarPlaylists()
    }

    render() {
        return (
            <div>
                <ContainerCriarPlaylist>
                    <PopUp>
                        <BotaoFechar onClick={this.fecharCriarPlaylists}>✖️</BotaoFechar>
                        <Formulario>Deseja adicionar uma nova playlist?
                            <input value={this.state.inputNome} placeholder="Insira o nome da playlist" onChange={this.salvaNomePlaylist}></input>
                        </Formulario>
                        <ContainerBotoes>
                            <button onClick={this.criarPlaylist}>Adicionar</button>

                        </ContainerBotoes>
                        {this.state.statusPlaylist && <MensagemConfirmacao> {this.state.statusMsg} </MensagemConfirmacao>}
                    </PopUp>
                </ContainerCriarPlaylist>
            </div>
        )
    }
}

export default CriarPlaylists;