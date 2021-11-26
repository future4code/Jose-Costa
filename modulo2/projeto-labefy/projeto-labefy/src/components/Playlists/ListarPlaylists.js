import React from "react";
import axios from "axios";
import DeletarPlaylist from "./DeletarPlaylist";

import { ContainerCardPlaylist, CardPlaylist, CardImagem, ImagemFundo, ImagemPlay, InfoPlaylist } from "./Styles/Style-ListarPlaylists";

class ListarPlaylists extends React.Component {
    state = {
        listaPlaylists: [],
    }

    componentDidMount = () => {
        this.listarPlaylists();
    }

    componentDidUpdate = () => {
        this.listarPlaylists();
    }

    listarPlaylists = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.setState({ listaPlaylists: res.data.result.list })
        }
        catch (err) {

        }
    }

    render() {
        let imagemPlaylist;
        return (
            <ContainerCardPlaylist onClick={this.props.fecharCriarPlaylists}>
                {this.state.listaPlaylists.length ? this.state.listaPlaylists.map((elemento, id) => {
                    imagemPlaylist = `https://picsum.photos/id/${id + 50}/200/300`
                    return (
                        <CardPlaylist key={id}>
                            <CardImagem>
                                <ImagemFundo src={imagemPlaylist} alt="Imagem Playlist" onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)} />
                                <ImagemPlay onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)} src="https://toppng.com/uploads/preview/white-play-icon-claims-adjuster-11553399850utg0lolmob.png" alt="Imagem do Play" />
                                <span onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)}>{elemento.name}</span>
                            </CardImagem>
                            <InfoPlaylist>
                                <p onClick={() => this.props.exibirDetalhes(elemento.id, elemento.name, id)}>Playlist: {elemento.name}</p>
                                <div>
                                    <DeletarPlaylist idPlaylist={elemento.id} />
                                </div>
                            </InfoPlaylist>
                        </CardPlaylist>
                    )
                }) : <p>Você pode adicionar playlists novas no menu acima.</p>}
            </ContainerCardPlaylist>
        )
    }
}

export default ListarPlaylists;