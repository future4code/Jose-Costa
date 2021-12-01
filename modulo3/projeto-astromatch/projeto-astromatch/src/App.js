import { useState, useEffect, React } from "react";
import TelaInicial from "./components/TelaInicial/TelaInicial"
import TelaMatches from "./components/TelaMatches/TelaMatches";
import { getProfileToChoose } from "./services/Services";

function App() {
  const [telaAtual, setTelaAtual] = useState("");
  const [pessoa, setPessoa] = useState({});

  useEffect(() => {
    selecionarPessoa();
  }, []);

  const exibirTela = () => {
    if (sessionStorage.getItem('tela') === "inicio") {
      return <TelaInicial pessoa={pessoa} selecionarPessoa={selecionarPessoa} />
    } else if (sessionStorage.getItem('tela') === "matches") {
      return <TelaMatches />
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
      <header>
        <button onClick={() => alterarTela("inicio")}>Início</button>
        <button onClick={() => alterarTela("matches")}>Matches</button>
      </header>
      {exibirTela()}
    </div>
  );
}

export default App;
