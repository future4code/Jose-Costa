import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerCriarPlaylist = styled.div`
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
            setTimeout(this.fecharCriarPlaylists, 7000)
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
            <div>
                <ContainerCriarPlaylist>
                    <div>
                        <input value={this.state.inputNome} placeholder="Insira o nome da playlist" onChange={this.salvaNomePlaylist}></input>
                        <button onClick={this.criarPlaylist}>Criar</button>

                        {this.state.statusPlaylist && <p> {this.state.statusMsg} </p>}
                        <button onClick={this.fecharCriarPlaylists}>Fechar</button>
                    </div>
                </ContainerCriarPlaylist>
            </div>
        )
    }
}

export default CriarPlaylists;