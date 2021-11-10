import React from "react";
import styled from "styled-components";

import Etapa1 from "./components/Etapa1/Etapa1";
import Etapa2Superior from "./components/Etapa2/Etapa2Superior";
import Etapa2Medio from "./components/Etapa2/Etapa2Medio";
import Etapa3 from "./components/Etapa3/Etapa3";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

class App extends React.Component {
  state = {
    etapa: 1,
    escolaridade: null,
  }

  botaoProximaEtapa = (infoEtapa, infoEscolaridade) => {
    console.log(infoEscolaridade)
    let escolaridade;
    if (infoEscolaridade === "Ensino médio completo" || infoEscolaridade === "Ensino médio incompleto" || infoEscolaridade === null) {
      escolaridade = false;
    } else {
      escolaridade = true;
    }
    this.setState({
      etapa: infoEtapa,
      escolaridade: escolaridade,
    })

  }

  render() {
    console.log(this.state.escolaridade)
    return (
      <Container>
        {this.state.etapa === 1 && <Etapa1 botaoProximaEtapa={this.botaoProximaEtapa} />}
        {(this.state.escolaridade && this.state.etapa === 2) && <Etapa2Superior botaoProximaEtapa={this.botaoProximaEtapa} escolaridade={this.state.escolaridade} />}
        {(!this.state.escolaridade && this.state.etapa === 2) && <Etapa2Medio botaoProximaEtapa={this.botaoProximaEtapa} escolaridade={this.state.escolaridade} />}
        {this.state.etapa === 3 && <Etapa3 />}
      </Container>
    )
  }
}

export default App;
