import React from "react";
import axios from "axios";

import { ContainerDeletarPlaylist, PopUp, ContainerBotoes, BotaoDeletar } from "./Styles/Style-DeletarPlaylist";
import { MdDeleteForever } from "react-icons/md";

class DeletarPlaylist extends React.Component {
    state = {
        statusDel: false,
        statusMsg: "",
        confirmacao: false,
        confirmacaoMsg: "Tem certeza que deseja deletar a playlist?",
    }

    deletarPlaylist = async (idPlaylist) => {
        this.setState({
            confirmacaoMsg: "Deletando...",
            confirmacao: 1
        })
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`
        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({
                statusDel: true,
                statusMsg: "Playlist deletada com sucesso!",
                confirmacao: false,
                confirmacaoMsg: "Tem certeza que deseja deletar a playlist?"
            })
            if (this.props.alteraPagina === 1) { this.props.alterarPagina("playlists") }
        }
        catch (err) {
  
        }
    }

    confirmaDelete = (e) => {
        this.setState({ confirmacao: !this.state.confirmacao })
    }

    render() {
        return (
            <div>
                <BotaoDeletar>
                    <MdDeleteForever onClick={this.confirmaDelete} />
                </BotaoDeletar>
                {this.state.confirmacao &&
                    <ContainerDeletarPlaylist>
                        <PopUp> <p> {this.state.confirmacaoMsg} </p>
                            <ContainerBotoes>
                                <button onClick={this.confirmaDelete} value={false}>Não</button> <button onClick={() => this.deletarPlaylist(this.props.idPlaylist)}>Sim</button>
                            </ContainerBotoes>
                        </PopUp>
                    </ContainerDeletarPlaylist>
                }
            </div>
        )
    }
}

export default DeletarPlaylist;