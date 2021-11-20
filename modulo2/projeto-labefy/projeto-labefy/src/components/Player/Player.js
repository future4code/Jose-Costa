import React from "react";
import styled from "styled-components";

const ContainerPlayer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #1e1e1e;
`

const ContainerMusica = styled.div`
    display: flex;
    justify-content: center;
    width: 43vw;
`

const ContainerAudio = styled.div`
    width: 57vw;

    audio {
        width: 30vw;
    }
`

class Player extends React.Component {
    render() {
        return (
            <ContainerPlayer>
                <ContainerMusica>
                    {this.props.musica && <p>Música atual: {this.props.musica} - Artista: {this.props.artista} </p>}
                </ContainerMusica>
                <ContainerAudio>
                {this.props.musica && <audio controls src={this.props.url} autoPlay>Aúdio</audio>}
                </ContainerAudio>
            </ContainerPlayer>
        )
    }
}

export default Player;