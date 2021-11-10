import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const ListaComentarios = styled.div`
	display: flex;
	font-size: 12px;
	padding-bottom: 5px;
`

const ContainerInputs = styled.div`
	display: flex;`

export class SecaoComentario extends Component {
	state = {
		comentario: "",
		comentarios: [],
	}

	onChangeComentario = (event) => {
		this.setState({
			comentario: event.target.value,
		})
	}

	onClickComentar = (aoEnviar) => {
		const novoComentario = [...this.state.comentarios, this.state.comentario]
		this.setState({
			comentarios: novoComentario,
			comentario: "",
		})
		aoEnviar();
	}


	render() {

		const listaComentarios = this.state.comentarios.map((elemento, index) => {
			return <ListaComentarios key={index}>
				<b>Você</b>: {elemento}
			</ListaComentarios>
		});

		return (
			<CommentContainer>
				{listaComentarios}
				<ContainerInputs>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.comentario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={() => this.onClickComentar(this.props.aoEnviar)}>Enviar</button>
				</ContainerInputs>
			</CommentContainer>
		)
	}
}
