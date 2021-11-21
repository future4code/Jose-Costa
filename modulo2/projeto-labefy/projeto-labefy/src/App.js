import React from "react";
import GlobalStyle from "./components/App/GlobalStyle";

import Inicio from "./components/Inicio/Inicio";
import Playlists from "./components/Playlists/Playlists";
import Explorar from "./components/Explorar/Explorar";
import DetalhesPlaylist from "./components/Playlists/DetalhesPlaylist";
import Player from "./components/Player/Player";

import { ContainerPrincipal, ContainerHeader, ContainerLogo, ContainerMenu, ContainerMain, ContainerFooter } from "./components/App/Styles";

class App extends React.Component {
  state = {
    paginaAtual: "inicio",
    idPlaylistDetalhes: "",
    nomePlaylistDetalhes: "",
    playerMusica: "",
    playerArtista: "",
    playerUrl: "",
    inicioAtivo: "white",
    explorarAtivo: "",
    playlistsAtivo: "",
    idArrayPlaylist: "",
  }

  alteraPagina = (e) => {
    if (e.target.value === "inicio") {
      this.setState({
        paginaAtual: e.target.value,
        inicioAtivo: "white",
        explorarAtivo: "gray",
        playlistsAtivo: "gray"
      })
    } else if (e.target.value === "explorar") {
      this.setState({
        paginaAtual: e.target.value,
        inicioAtivo: "gray",
        explorarAtivo: "white",
        playlistsAtivo: "gray"
      })
    } else {
      this.setState({
        paginaAtual: e.target.value,
        inicioAtivo: "gray",
        explorarAtivo: "gray",
        playlistsAtivo: "white"
      })
    }
  }

  alterarPagina = (pagina) => {
    if (pagina === "inicio") {
      this.setState({
        paginaAtual: pagina,
        inicioAtivo: "white",
        explorarAtivo: "gray",
        playlistsAtivo: "gray"
      })
    } else if (pagina === "explorar") {
      this.setState({
        paginaAtual: pagina,
        inicioAtivo: "gray",
        explorarAtivo: "white",
        playlistsAtivo: "gray"
      })
    } else {
      this.setState({
        paginaAtual: pagina,
        inicioAtivo: "gray",
        explorarAtivo: "gray",
        playlistsAtivo: "white"
      })
    }
  }

  exibirDetalhes = (idPlaylist, namePlaylist, idArrayPlaylist) => {
    this.setState({
      paginaAtual: "detalhes",
      idPlaylistDetalhes: idPlaylist,
      nomePlaylistDetalhes: namePlaylist,
      idArrayPlaylist: idArrayPlaylist,
    })
    return idPlaylist;
  }

  playerMusica = (musica, artista, url) => {
    this.setState({
      playerMusica: musica,
      playerArtista: artista,
      playerUrl: url,
    })
  }

  render() {
    return (
      <ContainerPrincipal>
        <ContainerHeader>
          <ContainerLogo onClick={() => this.setState({ paginaAtual: "inicio", inicioAtivo: "white", explorarAtivo: "gray", playlistsAtivo: "gray" })}>
            <img src="https://www.pinclipart.com/picdir/big/558-5585452_spire-music-recorder-icon-clipart.png" alt="Labefy Logo" />
            <h3>Labefy</h3>
          </ContainerLogo>
          <ContainerMenu>
            <button value="inicio" onClick={this.alteraPagina} style={{ color: this.state.inicioAtivo }}>Início</button>
            <button value="explorar" onClick={this.alteraPagina} style={{ color: this.state.explorarAtivo }}>Explorar</button>
            <button value="playlists" onClick={this.alteraPagina} style={{ color: this.state.playlistsAtivo }}>Playlists</button>
          </ContainerMenu>
        </ContainerHeader>

        <ContainerMain>
        {this.state.paginaAtual === "inicio" && <Inicio exibirDetalhes={this. exibirDetalhes} alterarPagina={this.alterarPagina} playerMusica={this.playerMusica} />}
          {this.state.paginaAtual === "playlists" && <Playlists exibirDetalhes={this.exibirDetalhes} />}
          {this.state.paginaAtual === "explorar" && <Explorar playerMusica={this.playerMusica} />}
          {this.state.paginaAtual === "detalhes" && <DetalhesPlaylist alterarPagina={this.alterarPagina} playerMusica={this.playerMusica} idPlaylist={this.state.idPlaylistDetalhes} nomePlaylist={this.state.nomePlaylistDetalhes} idArrayPlaylist={this.state.idArrayPlaylist} />}
        </ContainerMain>

        <ContainerFooter>
          <Player musica={this.state.playerMusica} artista={this.state.playerArtista} url={this.state.playerUrl} playerAtivo={this.playerMusica} />
        </ContainerFooter>
        <GlobalStyle />
      </ContainerPrincipal>
    )
  }
}

export default App;
