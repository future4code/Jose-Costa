import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerCriarPlaylist = styled.div`
  
    `

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
        console.log(this.state.inputNome)
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
            <ContainerCriarPlaylist>
                <input value={this.state.inputNome} placeholder="Insira o nome da playlist" onChange={this.salvaNomePlaylist}></input>
                <button onClick={this.criarPlaylist}>Criar</button>

                {this.state.statusPlaylist && <p> {this.state.statusMsg} </p>}
                <button onClick={this.fecharCriarPlaylists}>Fechar</button>
            </ContainerCriarPlaylist>
        )
    }
}

export default CriarPlaylists;