import React from 'react';
import styled from 'styled-components';

const ImagemButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 130px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImagemButtonImagem = styled.img`
    width: 30px;
    margin-right: 10px;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

function ImagemButton(props) {
    return (
        <Link href={props.link} target="_target">
            <ImagemButtonContainer>
                <ImagemButtonImagem src={props.imagem} />
                <p>{props.texto}</p>
            </ImagemButtonContainer>
        </Link>
    )
}

export default ImagemButton;