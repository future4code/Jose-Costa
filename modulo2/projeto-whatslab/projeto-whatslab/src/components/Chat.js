import React from "react";
import styled from "styled-components";
import Msgs from "./Msg";

import { MdPersonAddAlt } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import TelaInicial from "./TelaInicial";

const Container = styled.div`
    display: flex;
`

const ContainerSuperior = styled.div`
    display: flex;
    width: 20vw;
    justify-content: space-around;
    align-items: center;
`

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Logo = styled.h3`
    color: #3c3d68;
    cursor: pointer;
`

const InputContato = styled.input`
    width: 10vw;
    margin: 1vw;
    border: none;
`
const FotoLogo = styled.img`
    padding-right: 1vw;
    width: 3vw;
    height: 2.5vw;
    cursor: pointer;
    `
const ContainerAdicionarContato = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChatContainer = styled.div`
    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: end;
    background-color: #f1f1f1;
`

const FotoContato = styled.img`
  height: 5vh;
  width: auto;
  margin-left: 2vw;
  margin-right: 1vw;
  border-radius: 50%;
`
const ContainerListaContatos = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    padding-left: 1vw;
    justify-content: center;
`

const ContatosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 20vw;
  background-color: #e7eaed;

`
const Link = styled.a`
    height: 9vh;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3c3d68;
    cursor: pointer;
     &:hover {
    background: #bdc6ce;
    border-radius: 15px;
  }
`;

const LinkAtivo = styled.a`
    height: 9vh;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    background-color: #bdc6ce;
    border-radius: 15px;
`

const CursorPointer = styled.div`
    cursor: pointer;
`

class Chat extends React.Component {
    state = {
        idAtual: 99,
        novoContato: false,
        inputNovoContato: "",
        contatos: [
            { id: 0, ativo: false, nome: "Lívia", foto: "https://www.pinclipart.com/picdir/big/335-3356471_female-avatar-girls-avatar-clipart.png" },
            { id: 1, ativo: false, nome: "Valadares", foto: "https://www.pinclipart.com/picdir/big/111-1113427_avatar-clipart.png" }
        ],
    }

    vaiInicio = () => {
        if (this.state.idAtual !== 99) {
            const usuarioSelecionado = [...this.state.contatos]
            usuarioSelecionado[this.state.idAtual].ativo = false;
            this.setState({ idAtual: 99 });
        }
    }

    selecionaContato = (id) => {
        if (this.state.idAtual === 99) {
            const usuarioSelecionado = [...this.state.contatos]
            usuarioSelecionado[id].ativo = true
            this.setState({
                idAtual: id,
            })
        } else {
            const usuarioSelecionado = [...this.state.contatos]
            usuarioSelecionado[this.state.idAtual].ativo = false;
            usuarioSelecionado[id].ativo = true
            this.setState({
                idAtual: id,
            })
        }
    }

    adicionaContato = () => {
        this.setState({
            novoContato: !this.state.novoContato,

        })
    }

    armazenaNovoContato = (event) => {
        this.setState({
            inputNovoContato: event.target.value,
        })
    }

    botaoAdicionar = () => {
        if (this.state.inputNovoContato.length === 0) {
            alert(`Adiciona um nome válido. :)`)
        } else if (this.state.inputNovoContato.length > 14) {
            alert(`Número máximo de carecteres: 14. :|`)
        } else if (this.state.contatos.length >= 7) {
            alert(`Número máximo de contatos atingido. :/`)
            this.setState({
                novoContato: false,
            })
        } else {
            const novoId = this.state.contatos.length;
            const novaFoto = "https://i.pravatar.cc/150?img=" + novoId
            const dadosNovoContato = { id: novoId, ativo: false, nome: this.state.inputNovoContato, foto: novaFoto }

            const usuariosAtualizados = [...this.state.contatos, dadosNovoContato]
            this.setState({
                contatos: usuariosAtualizados,
                inputNovoContato: "",
                novoContato: false,
            })
        }
    }

    render() {
        let SecaoNovoContato;

        if (this.state.novoContato) {
            SecaoNovoContato = [<InputContato value={this.state.inputNovoContato} onChange={this.armazenaNovoContato} placeholder="Novo contato" />, <CursorPointer><MdOutlineCheckCircleOutline onClick={this.botaoAdicionar} /> </CursorPointer>]
        }
        const listaContatos = this.state.contatos.map((contato, id) => {
            if (contato.ativo) {
                return <LinkAtivo onClick={() => this.selecionaContato(contato.id)} key={id}>
                    <FotoContato src={contato.foto} />
                    <p><b>{contato.nome}</b></p>
                </LinkAtivo>
            } else {
                return <Link onClick={() => this.selecionaContato(contato.id)} key={id}>
                    <FotoContato src={contato.foto} />
                    <p><b>{contato.nome}</b></p>
                </Link>
            }
        });

        let paginaAtual;
        if (this.state.idAtual === 99) {
            paginaAtual = <TelaInicial></TelaInicial>
        } else {
            paginaAtual = [<ChatContainer> <Msgs idAtual={this.state.idAtual} nomeAtual={this.state.contatos[this.state.idAtual].nome} /> </ChatContainer>]
        }

        return (
            <Container>
                <ContatosContainer>
                    <ContainerSuperior>
                        <ContainerLogo>
                            <FotoLogo onClick={this.vaiInicio} src="https://www.pinclipart.com/picdir/big/63-632983_create-tasks-online-chat-clipart.png" />
                            <Logo onClick={this.vaiInicio}>WhatsLab </Logo>
                        </ContainerLogo>
                        <CursorPointer><MdPersonAddAlt onClick={this.adicionaContato} /></CursorPointer>
                    </ContainerSuperior>
                    <ContainerAdicionarContato>
                        {SecaoNovoContato}
                    </ContainerAdicionarContato>
                    <ContainerListaContatos>
                        {listaContatos}
                    </ContainerListaContatos>
                </ContatosContainer>
                {paginaAtual}
            </Container >
        )
    }
}

export default Chat;