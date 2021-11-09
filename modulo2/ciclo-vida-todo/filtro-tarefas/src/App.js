import React from 'react';
import styled from 'styled-components';

import InputControlado from './components/InputControlado';
import FiltroTarefas from './components/FiltroTarefas';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 2vh;

  input {
    margin: 1vh;
  }
`

class App extends React.Component {
  state = {
    inputTarefa: "",
    tarefas: [],
  }

  salvarLocalStorage = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }

  buscarLocalStorage = () => {
    const tarefasLocalStorage = localStorage.getItem("tarefas")
    const tarefasParse = JSON.parse(tarefasLocalStorage)
    this.setState({
      tarefas: tarefasParse || "",
    })
  }

  componentDidMount = () => {
    this.buscarLocalStorage();
  }

  onChangeInput = (event) => {
    this.setState({
      inputTarefa: event.target.value,
    })
  }

  onClickAdicionar = () => {
    if (this.state.inputTarefa.length === 0) {
      alert(`Adicione uma tarefa.`)
    } else {
      const novaTarefa = {
        id: this.state.tarefas.length,
        tarefa: this.state.inputTarefa,
        textoOriginal: this.state.inputTarefa,
        status: "pendente",
      }

      const novaListaTarefas = [...this.state.tarefas]
      novaListaTarefas.push(novaTarefa);

      this.setState({
        inputTarefa: "",
        tarefas: novaListaTarefas,
      })
    }
  }

  onClickTarefa = (idTarefa) => {
    const listaTarefa = [...this.state.tarefas];

    const alteraTarefa = listaTarefa.map((elemento, id) => {
      if (idTarefa === id) {
        if (elemento.status === "pendente") {
          elemento.status = "completa"
        } else if (elemento.status === "completa") {
          elemento.status = "pendente";
        }
        return elemento;
      } else {
        return elemento;
      }
    })

    this.setState({
      tarefas: alteraTarefa,
    })
  }

  render() {
    return (
      <Container>
        <h3>Lista de tarefas</h3>
        <InputControlado required salvarLocal={this.salvarLocalStorage} onChangeInput={this.onChangeInput} onClickAdicionar={this.onClickAdicionar} />
        <FiltroTarefas listaTarefas={this.state.tarefas} alteraTarefa={this.onClickTarefa} salvaLocal={this.salvarLocalStorage} />
      </Container>

    )
  }
}

export default App;
