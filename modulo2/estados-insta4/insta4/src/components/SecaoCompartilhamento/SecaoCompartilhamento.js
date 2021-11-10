import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export default class SecaoCompartilha extends React.Component {
    state = {
        texto: "",
        placeholder: "Insira uma mensagem",
        compartilhado: false,
    }

    onChangeTexto = (event) => {
        this.setState({
            texto: event.target.value,
        })
    }

    aoCompartilhar = () => {
        if (this.state.compartilhado === false) {
            console.log(`Post compartilhado no ${this.props.rede} com a mensagem: "${this.state.texto}"`)
            this.setState({
                texto: "",
                placeholder: "Compartilhado com sucesso!",
                compartilhado: true,
            });

        } else {
            this.setState({
                placeholder: "Você acabou de compartilhar!"
            });
        }
    }

        render() {
            return <CommentContainer>
                <InputComentario
                    placeholder={this.state.placeholder}
                    value={this.state.texto}
                    onChange={this.onChangeTexto}
                />
                <button onClick={this.aoCompartilhar}>Compartilhar</button>
            </CommentContainer>
        }
    }