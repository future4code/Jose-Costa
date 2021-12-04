import { useState, useEffect, React } from "react";
import TelaInicial from "./components/TelaInicial/TelaInicial"
import TelaMatches from "./components/TelaMatches/TelaMatches";
import { GlobalStyle } from "./components/AppStyle";
import * as C from "./components/AppStyle";
import { getProfileToChoose } from "./services/Services";

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
      <C.Container>
        <C.MainContainer>
          {exibirTela()}
        </C.MainContainer>
      </C.Container>
    </div>
  );
}

export default App;
