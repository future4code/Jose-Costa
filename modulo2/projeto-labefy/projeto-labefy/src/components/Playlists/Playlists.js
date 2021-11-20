import React from "react";
import CriarPlaylists from "./CriarPlaylists";
import ListarPlaylists from "./ListarPlaylists";

class Playlists extends React.Component {
    state = {
        criarPlaylist: false,
    }

    abrirCriarPlaylist = () => {
        this.setState({ criarPlaylist: !this.state.criarPlaylist })
    }

    fecharCriarPlaylist = () => {
        this.setState({ criarPlaylist: false })
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.abrirCriarPlaylist}>Criar Playlists</button>
                    {this.state.criarPlaylist && <CriarPlaylists fecharCriarPlaylists={this.abrirCriarPlaylist} />}
                </div>
                <div>
                    <ListarPlaylists fecharCriarPlaylists={this.fecharCriarPlaylist} exibirDetalhes={this.props.exibirDetalhes} />
                </div>
            </div>
        )
    }
}

export default Playlists;