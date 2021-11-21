import React from "react";

import AdicionarMusicas from "../Playlists/Musicas/AdicionarMusicas";

import { ContainerPlayer, ContainerMusica, ContainerAudio, ContainerFechar } from "./Styles/Style-Player";

const Player = (props) => {
    return (
        <ContainerPlayer>
            <ContainerMusica>
                {props.musica && <p>Música atual: {props.musica} - Artista: {props.artista} </p>}
            </ContainerMusica>
            <ContainerAudio>
                {props.musica && <audio controls src={props.url} autoPlay>Aúdio</audio>}
            </ContainerAudio>
            {props.musica &&
                <ContainerFechar>
                    <AdicionarMusicas nome={props.musica} artista={props.artista} url={props.url} />
                    <div onClick={() => props.playerAtivo(false, false, false)}>✖️</div>
                </ContainerFechar>
            }
        </ContainerPlayer>

    )
}

export default Player;