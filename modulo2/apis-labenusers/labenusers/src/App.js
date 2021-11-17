import React from "react";
import Cadastro from "./components/Cadastro/Cadastro";
import Usuarios from "./components/Usuarios/Usuarios";

import { ContainerPrincipal, ContainerCentral, ContainerMenu, ContainerMain } from "./components/AppStyle"

class App extends React.Component {
  state = {
    listaUsuarios: [],
    paginaAtiva: "cadastro",
  }

  alteraPagina = (event) => {
    if (event.target.value === "cadastro") {
      this.setState({ paginaAtiva: "cadastro" })
    } else if (event.target.value === "usuarios") {
      this.setState({ paginaAtiva: "usuarios" })
    }
  }

  render() {
    return (
      <ContainerPrincipal>
        <ContainerCentral>
          <ContainerMenu>
            <button value="cadastro" onClick={this.alteraPagina}>Cadastro</button>
            <button value="usuarios" onClick={this.alteraPagina}>Usuários</button>
          </ContainerMenu>
          <ContainerMain>
            {this.state.paginaAtiva === "cadastro" && <Cadastro />}
            {this.state.paginaAtiva === "usuarios" && <Usuarios />}
          </ContainerMain>
        </ContainerCentral>
      </ContainerPrincipal>
    )
  }
}

export default App;