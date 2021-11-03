import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const CardGrandeImagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const CardGrandeTitulo = styled.h4`
    margin-right: 5px;
`

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <CardGrandeImagem src={props.imagem} />
            <div>
                <CardGrandeTitulo>{props.nome}</CardGrandeTitulo>
                <p>{props.descricao}</p>
            </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;