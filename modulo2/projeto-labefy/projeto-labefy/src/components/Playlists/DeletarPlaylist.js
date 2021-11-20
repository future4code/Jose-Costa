import React from "react";
import axios from "axios";
import styled from "styled-components";

const Confirmacao = styled.div`
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
    }
`

class DeletarPlaylist extends React.Component {
    state = {
        statusDel: false,
        statusMsg: "",
        confirmacao: false,
        confirmacaoMsg: "Confirma?",
    }

    deletarPlaylist = async (idPlaylist) => {
        this.setState({
            confirmacaoMsg: "Deletando...",
            confirmacao: 1
        })
        this.props.fecharCriarPlaylists();
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`
        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({
                statusDel: true,
                statusMsg: "Playlist deletada com sucesso!",
                confirmacao: false,
                confirmacaoMsg: "Confirma?"
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    confirmaDelete = (e) => {
        this.setState({ confirmacao: !this.state.confirmacao })
        // setTimeout(() => this.setState({ confirmacao: false }), 7000)
    }

    render() {
        return (
            <div>
                <button onClick={this.confirmaDelete}>X</button>
                {this.state.confirmacao && <Confirmacao> <div> <p> {this.state.confirmacaoMsg} </p> <button onClick={this.confirmaDelete} value={false}>Não</button> <button onClick={() => this.deletarPlaylist(this.props.idPlaylist)}>Sim</button> </div> </Confirmacao>}
            </div>
        )
    }
}

export default DeletarPlaylist;