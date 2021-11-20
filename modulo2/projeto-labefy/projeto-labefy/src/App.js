import React from "react";
import GlobalStyle from "./components/App/GlobalStyle";
import styled from "styled-components"

import Playlists from "./components/Playlists/Playlists";
import Explorar from "./components/Explorar/Explorar";
import DetalhesPlaylist from "./components/Playlists/DetalhesPlaylist";
import Player from "./components/Player/Player";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #030303;
  height: 100vh;
`

const ContainerHeader = styled.div`
  display: flex;
  height: 7vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1e1e1e;
`

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: start;
  cursor: pointer;

  img {
    height: 6vh;
    padding-left: 1vw;
  }

  h3 { 
    text-indent: 1vw;
  }
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;

  button {
    background-color: #030303;
    color: gray;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    margin: 1vw;
    cursor: pointer;
  }
`

const ContainerMain = styled.div`
    height: 70vh;
    display: flex;
`

const ContainerFooter = styled.div`
  display: flex;
  height: 7vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`

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

  exibirDetalhes = (idPlaylist, namePlaylist) => {
    this.setState({
      paginaAtual: "detalhes",
      idPlaylistDetalhes: idPlaylist,
      nomePlaylistDetalhes: namePlaylist,
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
          {this.state.paginaAtual === "playlists" && <Playlists exibirDetalhes={this.exibirDetalhes} />}
          {this.state.paginaAtual === "explorar" && <Explorar playerMusica={this.playerMusica} />}
          {this.state.paginaAtual === "detalhes" && <DetalhesPlaylist playerMusica={this.playerMusica} idPlaylist={this.state.idPlaylistDetalhes} nomePlaylist={this.state.nomePlaylistDetalhes} />}
        </ContainerMain>

        <ContainerFooter>
          <Player musica={this.state.playerMusica} artista={this.state.playerArtista} url={this.state.playerUrl} />
        </ContainerFooter>
        <GlobalStyle />
      </ContainerPrincipal>
    )
  }
}

export default App;
