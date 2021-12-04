import { useState, useEffect, React } from "react";
import { GlobalStyle } from "./components/AppStyle";
import TelaInicial from "./components/TelaInicial/TelaInicial"
import TelaMatches from "./components/TelaMatches/TelaMatches";
import { getProfileToChoose } from "./services/Services";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  width: 360px;
  height: 560px;
  border: 1px solid gray;
  border-radius: 5px;
`
const App = () => {
  const [telaAtual, setTelaAtual] = useState("inicio");
  const [pessoa, setPessoa] = useState({});

  useEffect(() => {
    selecionarPessoa();
  }, []);

  const exibirTela = () => {
    if (sessionStorage.getItem('tela') === "inicio" || telaAtual === "inicio") {
      return <TelaInicial pessoa={pessoa} selecionarPessoa={selecionarPessoa} alterarTela={alterarTela} />
    } else if (sessionStorage.getItem('tela') === "matches") {
      return <TelaMatches selecionarPessoa={selecionarPessoa} alterarTela={alterarTela} />
    }
  }

  const alterarTela = (tela) => {
    setTelaAtual(tela);
    sessionStorage.setItem('tela', tela);
    exibirTela();
  }

  const selecionarPessoa = () => {
    getProfileToChoose().then((res) => {
      setPessoa(res);
    })
  }

  return (
    <div>
      <GlobalStyle />
      <Container>
        <MainContainer>
          {exibirTela()}
        </MainContainer>
      </Container>
    </div>
  );
}

export default App;
