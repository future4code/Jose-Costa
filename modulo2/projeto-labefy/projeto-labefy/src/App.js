import React from "react";
import GlobalStyle from "./components/App/GlobalStyle";
import styled from "styled-components"

import Playlists from "./components/Playlists/Playlists";
import Buscar from "./components/Buscar/Buscar";

const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vh;
`

class App extends React.Component {
  state = {
    paginaAtual: "inicio"
  }

  alteraPagina = (e) => {
    this.setState({ paginaAtual: e.target.value })
  }

  render() {
    return (
      <ContainerPrincipal>
        <ContainerMenu>
          <button value="inicio" onClick={this.alteraPagina}>Início</button>
          <button value="playlists" onClick={this.alteraPagina}>Playlists</button>
          <button value="buscar" onClick={this.alteraPagina}>Buscar</button>
        </ContainerMenu>

        <ContainerMain>
          {this.state.paginaAtual === "playlists" && <Playlists />}
          {this.state.paginaAtual === "buscar" && <Buscar />}
        </ContainerMain>

        <GlobalStyle />

      </ContainerPrincipal>
    )
  }
}

export default App;
