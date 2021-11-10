import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import IconeMarcacao from '../IconeMarcacao/IconeMarcacao'
import SecaoCompartilha from '../SecaoCompartilhamento/SecaoCompartilhamento'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const PostRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 5vw;
`
const IconeCompartilhamento = styled.img`
height: 2.5vh;
width: auto;
margin-right: 1vw;
`

const PostHeaderRight = styled.div`
display: flex;
`

const PostHeaderLeft = styled.div`
display: flex;
align-items: center;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    compartilhando: false,
    textoCompartilha: false,
    plataformaCompartilha: "",
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if (this.state.curtido === false) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: true,
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: true,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  Compartilhamento = () => {
    let iconeCompartilhar = "https://www.pinclipart.com/picdir/big/541-5416497_free-clip-art-icon-share-icon-flat-png.png";
    return (
      <IconeCompartilhamento onClick={this.onClickCompartilhar} src={iconeCompartilhar} alt="Ícone Compartilhamento"></IconeCompartilhamento>
    );
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickTwitter = () => {
    this.setState({
      textoCompartilha: !this.state.textoCompartilha,
      plataformaCompartilha: "Twitter",
    })
  }

  onClickFacebook = () => {
    this.setState({
      textoCompartilha: !this.state.textoCompartilha,
      plataformaCompartilha: "Facebook",
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario;
    let componenteTextoCompartilha;
    let secaoFacebook;
    let secaoTwitter;

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />;
    }

    if (this.state.textoCompartilha) {
      componenteTextoCompartilha = <SecaoCompartilha rede={this.state.plataformaCompartilha} />;
    }

    if (this.state.compartilhando) {
      const iconeTwiter = "https://www.pinclipart.com/picdir/big/539-5394328_twitter-icon-png-twitter-icon-outline-png-clipart.png";
      const iconeFacebook = "https://www.pinclipart.com/picdir/big/173-1736344_facebook-f-png-facebook-f-icon-png-clipart.png";
      secaoTwitter = <IconeCompartilhamento onClick={this.onClickTwitter} src={iconeTwiter} alt="Ícone Twitter"></IconeCompartilhamento> 
      secaoFacebook = <IconeCompartilhamento onClick={this.onClickFacebook} src={iconeFacebook} alt="Ícone Facebook"></IconeCompartilhamento>;
    }

    return <PostContainer>
      <PostHeader>
        <PostHeaderLeft>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeaderLeft>
        <PostHeaderRight>
          <this.Compartilhamento onClick={this.onClickCompartilhar} />
          {secaoTwitter} {secaoFacebook}
        </PostHeaderRight>
      </PostHeader>
      {componenteTextoCompartilha}

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>

        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <PostRight>

          <IconeMarcacao />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostRight>

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post