import React from "react";
import Inputs from "./Inputs";
import styled from "styled-components";

import Bots from "./Bot";

const ContainerChatMaior = styled.div`
    margin: 1vw;
`
const TextoChat = styled.div`
    display:inline-block;
    font-size: 0.8rem;
    border: none;
    background-color: #bdc6ce;
    border-radius: 15px;
    padding: 0 1vw 0 1vw;
    margin-top: 1vw;
`

const RespostaChat = styled.div`
`

class Msgs extends React.Component {
    state = {
        nick: "",
        mensagem: "",
        idAtual: 0,
        respostas: [],
        contatos: [
            { id: 0, mensagens: [] },
            { id: 1, mensagens: [] },
        ],
    }

    adicionaMsg = (inputNick, inputMsg) => {
        if (inputNick.length === 0) {
            alert(`Insira seu nome de usuário.`);
        } else if (inputMsg.length === 0) {
            alert(`Insira uma mensagem. :D`)
        } else {
            const id = this.props.idAtual
            const msgHorario = `${new Date().getHours()}h${new Date().getMinutes()}`;
            const addMsg = this.state.contatos.filter((elemento, index, array) => {
                if (elemento.id === id) {
                    elemento.mensagens.push(`${inputMsg} | ⌚ ${msgHorario} `)
                }
                return array;
            })
            const respostaHorario = `${new Date().getHours()}h${new Date().getMinutes()}`;
            const respostaBot = ["Olá!", "É verdade...", "Você tem razão.", "Será que vai chover hoje?", "Eita calorzão!", "Rolava praia hoje, hein?", "Ninguém merece uma segunda-feira.", "Opa, beleza?", "Tudo tranquilo e calmo.", "Que chat bacana, não acha?", "É a primeira vez que você usa esse chat?", "Você conhece José Rodolfo?", "Há muito tempo que quero conhecer ele", "Gostei disso.", "Adorei seu último post no Instagram", "O que você me recomenda de filme", "Posso te ajudar em algo?", "Tudo bem?", "Hoje o dia foi massa?", "Que dia bonito está fazendo hoje, né?", "Estou me sentindo bem e você?", "Foram tantas brincadeiras, tantas conversas, tantas risadas e olhe agora. Nem conversamos mais.", "É difícil conversar quando a maioria das conversas é na base do “tente passar o que eu estou passando”."]
            const selecionarResposta = respostaBot[Math.floor(Math.random() * respostaBot.length)]
            const respostaFinal = `${selecionarResposta} | ⌚ ${respostaHorario}`
            this.state.respostas.push(respostaFinal)
          
            this.setState({
                nick: inputNick,
                // respostas: adicionarResposta,
                contatos: addMsg,
            })
        }
    }

    deletaMsg = (idConversa, id) => {
        const confirmaDelete = window.confirm(`Tem certeza que deseja excluir essa mensagem?`);
        if (confirmaDelete) {

            const retiraMsg = [...this.state.contatos]
            retiraMsg[idConversa].mensagens.splice(id, 1)


            this.setState({
                contatos: retiraMsg,
            })
        }
    }

    adicionaNovoUsuario = (id) => {
        const dadosNovoContato = { id: id, mensagens: [] }

        const usuariosAtualizados = [...this.state.contatos]
        usuariosAtualizados.push(dadosNovoContato);

        this.setState({
            contatos: usuariosAtualizados,
        })
    }

    render() {
        let listaMensagens;
        let i = 0;
        const idConversa = this.props.idAtual
        if (idConversa > (this.state.contatos.length - 1)) {
            this.adicionaNovoUsuario(idConversa)
        } else if (this.state.contatos.length > idConversa) {
            listaMensagens = this.state.contatos[idConversa].mensagens.map((msg, id) => {
                return (<div>
                    <TextoChat key={id} onDoubleClick={() => this.deletaMsg(idConversa, id)}>
                        <p> <b>{this.state.nick}</b>:</p>
                        <p>{msg}</p>
                    </TextoChat>
                    <RespostaChat>
                        <Bots nomeAtual={this.props.nomeAtual} resposta={this.state.respostas[i++]}></Bots>
                    </RespostaChat>
                </div>
                )
            })
        }

        return (
            <div>
                <ContainerChatMaior>
                    {listaMensagens}
                </ContainerChatMaior>
                <Inputs adicionaMsg={this.adicionaMsg} />
            </div >
        )
    }

}

export default Msgs;