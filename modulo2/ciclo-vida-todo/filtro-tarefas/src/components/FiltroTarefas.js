import React from "react";

class FiltroTarefas extends React.Component {
    state = {
        filtroAtual: "todas",
    }

    onChangeTarefas = (event) => {
        this.setState({
            filtroAtual: event.target.value,
        })

    }

    componentDidUpdate = () => {
        this.props.salvaLocal();
    }

    render() {
        let listaFiltrada;
        if (this.props.listaTarefas) {
            const listaTarefas = this.props.listaTarefas.filter((elemento) => {
                if (this.state.filtroAtual === "todas") {
                    return elemento;
                } else {
                    return elemento.status === this.state.filtroAtual;
                }
            })

            listaFiltrada = listaTarefas.map((elemento) => {
                if (elemento.status === "completa") {
                    return <li key={elemento.id} onClick={() => this.props.alteraTarefa(elemento.id)}><s>{elemento.tarefa}</s></li>
                } else {
                    return <li key={elemento.id} onClick={() => this.props.alteraTarefa(elemento.id)}>{elemento.tarefa}</li>
                }
            })
        }

        return (
            <div>
                Filtro:
                <select onChange={this.onChangeTarefas}>
                    <option value="todas">Todas</option>
                    <option value="pendente">Pendentes</option>
                    <option value="completa">Completas</option>
                </select>
                <ul>
                    {listaFiltrada}
                </ul>
            </div>
        )
    }
}

export default FiltroTarefas;