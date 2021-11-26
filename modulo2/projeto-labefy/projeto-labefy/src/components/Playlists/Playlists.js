import React from "react";
import CriarPlaylists from "./CriarPlaylists";
import ListarPlaylists from "./ListarPlaylists";

import { ContainerPlaylist, TituloContainer, ContainerNovaPlaylist, NovaPlaylist, ContainerListas } from "./Styles/Style-Playlists";
import { MdPlaylistAdd } from "react-icons/md";

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
            <ContainerPlaylist>
                <ContainerNovaPlaylist>
                    <NovaPlaylist onClick={this.abrirCriarPlaylist}><MdPlaylistAdd /> Nova playlist </NovaPlaylist>
                    {this.state.criarPlaylist && <CriarPlaylists fecharCriarPlaylists={this.abrirCriarPlaylist} />}
                </ContainerNovaPlaylist>
                <TituloContainer>Suas playlists:</TituloContainer>
                <ContainerListas>
                    <ListarPlaylists fecharCriarPlaylists={this.fecharCriarPlaylist} exibirDetalhes={this.props.exibirDetalhes} />
                </ContainerListas>
            </ContainerPlaylist>
        )
    }
}

export default Playlists;