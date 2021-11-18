import React from "react";
import axios from "axios";
import DeletarPlaylist from "./DeletarPlaylist";

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
        return (
            <div onClick={this.props.fecharCriarPlaylists}>
                <div>
                    Lista Playlists:
                    {this.state.listaPlaylists.length > 0 ? this.state.listaPlaylists.map((elemento, id) => {
                        return (
                            <div>
                                <p> {elemento.name} </p>
                                <DeletarPlaylist idPlaylist={elemento.id} fecharCriarPlaylists={this.props.fecharCriarPlaylists}/>
                            </div>
                        )
                    }) : <p>Adicione uma playlist.</p>}
                </div>
            </div>
        )
    }
}

export default ListarPlaylists;