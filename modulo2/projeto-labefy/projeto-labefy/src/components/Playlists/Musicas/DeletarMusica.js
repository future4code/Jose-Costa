import React from "react";
import axios from "axios";

import { MdDeleteForever } from "react-icons/md";

class DeletarMusica extends React.Component {
    deletarMusica = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${this.props.idMusica}`
        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: "jose-rodolfo-carver"
                }
            })
            this.props.atualizarLista();    
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <MdDeleteForever onClick={this.deletarMusica} />
        )
    }
}

export default DeletarMusica;