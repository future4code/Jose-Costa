import React from "react";
import axios from "axios";

class DeletarPlaylist extends React.Component {
    state = {
        statusDel: false,
        statusMsg: "",
        confirmacao: false,
    }

    deletarPlaylist = async (idPlaylist) => {
        this.setState({ confirmacao: 1})
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
                statusMsg: "Playlist deletada com sucesso!"
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    confirmaDelete = (e) => {
        this.setState({ confirmacao: !this.state.confirmacao})
    }

    render() {
        return (
            <div>
                <button onClick={this.confirmaDelete}>X</button>
                {this.state.confirmacao && <div><p>Confirma?</p> <button onClick={this.confirmaDelete} value={false}>Não</button> <button onClick={() => this.deletarPlaylist(this.props.idPlaylist)}>Sim</button> </div>}
            </div>
        )
    }
}

export default DeletarPlaylist;