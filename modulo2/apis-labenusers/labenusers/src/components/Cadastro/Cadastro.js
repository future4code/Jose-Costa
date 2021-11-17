import React from "react";
import axios from "axios";

import { ContainerCadastro } from "./Style";

class Cadastro extends React.Component {
    state = {
        inputNome: "",
        inputEmail: "",
    }

    alteraNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    alteraEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    criarUsuario = () => {
        if ((!this.state.inputEmail.includes("@", ".")) || (this.state.inputNome.includes("!", "@", "?"))) {
            alert("Insira um nome/e-mail válido.")
        } else {
            const bodyCriarusuario = {
                name: this.state.inputNome,
                email: this.state.inputEmail
            }
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", bodyCriarusuario, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            }).then((response) => {
                this.setState({
                    inputNome: "",
                    inputEmail: "",
                })
                alert(`Usuário adicionado com sucesso!`)
            }).catch((error) => {
                alert("Erro: Usuário/E-mail já existente.")
            })
        }
    }

    render() {
        return (
            <div>
                <ContainerCadastro>
                    <input placeholder="Nome" value={this.state.inputNome} onChange={this.alteraNome} />
                    <input type="email" placeholder="E-mail" value={this.state.inputEmail} onChange={this.alteraEmail} />
                    <button onClick={this.criarUsuario}>Cadastrar</button>
                </ContainerCadastro>

            </div>
        )
    }
}

export default Cadastro;