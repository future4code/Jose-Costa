import React from "react";
import axios from "axios";

import { ContainerBusca, ContainerResultados, ContainerUsuarios, TextoCentralizado } from "./Style";

class Usuarios extends React.Component {
    state = {
        listaUsuarios: [],
        infoUsuario: [],
        paginaAtual: true,
        edicaoUsuario: true,
        inputNome: "",
        inputEmail: "",
        inputBusca: "",
    }

    componentDidMount = () => {
        this.listarUsuarios();
    }

    listarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "jose-rodolfo-carver"
            }
        }).then((response) => {
            this.setState({ listaUsuarios: response.data })
        }).catch((error) => {
            console.log(error.response.status, error.response.data)
        })
    }

    deletarUsuario = (idUsuario, statusEdicao) => {
        const confirmacaoDelete = window.confirm("Tem certeza que deseja deletar?");

        if (confirmacaoDelete) {
            const urlComPath = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + idUsuario
            axios.delete(urlComPath, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            }).then((response) => {
                if (!statusEdicao) {
                    this.setState({
                        infoUsuario: [],
                        paginaAtual: !this.state.paginaAtual
                    })
                } else {
                    this.setState({
                        infoUsuario: [],
                    })
                }
                alert("Usuário deletado com sucesso!");
                this.listarUsuarios();
            }).catch((error) => {
                console.log(error.response.data)
            })
        }
    }

    infoUsuario = (idUsuario, statusEdicao) => {
        if (!statusEdicao) {
            this.setState({ paginaAtual: !this.state.paginaAtual })
        }
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, {
            headers: {
                Authorization: "jose-rodolfo-carver"
            }
        }).then((response) => {
            this.setState({ infoUsuario: response.data })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    editaNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    editaEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    editaUsuario = () => {
        if ((!this.state.inputEmail.includes("@", ".")) || (this.state.inputNome.includes("!", "@", "?"))) {
            alert("Insira um nome/e-mail válido.")
        } else {
            const idUsuario = this.state.infoUsuario.id;
            const bodyEditaUsuario = {
                name: this.state.inputNome,
                email: this.state.inputEmail
            }
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.infoUsuario.id}`, bodyEditaUsuario, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            }).then((response) => {
                alert("Usuário editado com sucesso!");
                this.setState({
                    inputNome: "",
                    inputEmail: "",
                    edicaoUsuario: !this.state.edicaoUsuario,
                })
                this.listarUsuarios();
                this.infoUsuario(idUsuario, true);
            }).catch((error) => {
                console.log("erro")
            })
        }
    }

    atualizaBusca = (event) => {
        this.setState({ inputBusca: event.target.value })
    }

    buscaUsuario = () => {
        if (this.state.inputBusca.length < 1) {
            alert("Adicione um nome no campo de busca.")
        } else {
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBusca}`, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            }).then((response) => {
                this.infoUsuario(response.data[0].id)
                this.setState({
                    inputBusca: "",
                })
            }).catch((error) => {
                alert("Nome não localizado.")
            })
        }
    }



    render() {
        return (
            <ContainerUsuarios>
                <ContainerBusca>
                    <input placeholder="Busca" value={this.state.inputBusca} onChange={this.atualizaBusca} />
                    <button onClick={this.buscaUsuario}>🔎</button>
                </ContainerBusca>

                {this.state.paginaAtual ?
                    this.state.listaUsuarios.length > 0 ? this.state.listaUsuarios.map((elemento, id) => {
                        return (
                            <ContainerResultados key={id}>
                                <p onClick={() => this.infoUsuario(elemento.id)}> {elemento.name} </p>
                                <button onClick={() => this.deletarUsuario(elemento.id, true)}>✖️</button>
                            </ContainerResultados>
                        );
                    }) : <TextoCentralizado>Cadastre alguém.</TextoCentralizado>
                    :
                    [<p key={this.state.infoUsuario.id}> <b>Nome</b>: {this.state.infoUsuario.name} </p>,
                    <p> <b>E-mail</b>: {this.state.infoUsuario.email} </p>,
                    this.state.edicaoUsuario ? <button onClick={() => this.setState({ edicaoUsuario: !this.state.edicaoUsuario })}>Editar</button>
                        :
                        [<input placeholder="Nome" value={this.state.inputNome} onChange={this.editaNome} />, <input placeholder="Email" value={this.state.inputEmail} onChange={this.editaEmail} />, <button onClick={this.editaUsuario}>Salvar</button>],
                    <button onClick={() => this.deletarUsuario(this.state.infoUsuario.id)}>Deletar</button>,
                    <button onClick={() => this.setState({
                        paginaAtual: !this.state.paginaAtual,
                        edicaoUsuario: true,
                    })}>Voltar</button>,
                    ]
                }
            </ContainerUsuarios>
        )
    }
}

export default Usuarios;