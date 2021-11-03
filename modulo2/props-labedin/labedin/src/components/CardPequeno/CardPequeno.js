import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    `

const CardPequenoImagem = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardPequenoItems = styled.div`
    display: flex;
    align-items: start;
`

const CardPequenoTitulo = styled.p`
    margin-right: 5px;
    font-weight: bolder;
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <CardPequenoImagem src={props.imagem} />
            <CardPequenoItems>
                <CardPequenoTitulo>{props.item}:</CardPequenoTitulo>
                <p>{props.descricao}</p>
            </CardPequenoItems>
        </CardPequenoContainer>
    )
}

export default CardPequeno;