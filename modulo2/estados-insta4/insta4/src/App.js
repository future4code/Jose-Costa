import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PostagemContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  border-bottom: none;
`

const NovoPostContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`

const IconeImagem = styled.img`
  height: 4vh;
  width: auto;
  `

const Logo = styled.h4`
  color: #7f99a9;
  font-family: Verdana;
  `

const IconeLogo = () => {
  return <Logo>Insta4 :}</Logo>;
}

const IconePostagem = (props) => {
  return <IconeImagem onClick={props.onClick} src="https://www.pinclipart.com/picdir/big/126-1266771_post-page-to-add-pictures-comments-add-post.png" alt="Icone Postagem" />;
}

class App extends React.Component {
  state = {
    cadastros: 3,
    usuarios: [{
      id: 1,
      nome: "paulinha",
      foto: "https://picsum.photos/50/50?random=1",
      post: "https://picsum.photos/200/150?random",
    },
    {
      id: 2,
      nome: "mari_elba",
      foto: "https://picsum.photos/50/50?random=2",
      post: "https://picsum.photos/200/150?random=2",
    },
    {
      id: 3,
      nome: "quintino",
      foto: "https://picsum.photos/50/50?random=3",
      post: "https://picsum.photos/200/150?random=3",
    },
    ],
    inputLogin: "",
    inputLink: "",
    novaPostagem: false,
  }

  onChangeInputLogin = (event) => {
    this.setState({
      inputLogin: event.target.value,
    })
  }

  onChangeInputLink = (event) => {
    this.setState({
      inputLink: event.target.value,
    })
  }

  adicionaPost = () => {
    const novoId = this.state.cadastrados + 1;
    const novaFoto = "https://picsum.photos/200/150?random=" + novoId;
    const novaPostagem = {
      id: novoId,
      nome: this.state.inputLogin,
      foto: novaFoto,
      post: this.state.inputLink,
    };

    const novosUsuarios = [...this.state.usuarios, novaPostagem];

    this.setState({
      usuarios: novosUsuarios,
      cadastrados: novoId,
      inputLogin: "",
      inputLink: "",
    })
  }

  onClickPostagem = () => {
    console.log("teste")
    this.setState({
      novaPostagem: !this.state.novaPostagem,
    })
  }

  render() {

     let novoPost;
    if (this.state.novaPostagem) {
      novoPost = [<input onChange={this.onChangeInputLogin} value={this.state.inputLogin} placeholder="Login" />, <input onChange={this.onChangeInputLink} value={this.state.inputLink} placeholder="Link da foto" />, <button onClick={this.adicionaPost}>Postar Foto</button>]
    }

    const posts = this.state.usuarios.map((elemento) => {
      return (
        <Post key={elemento.id}
          nomeUsuario={elemento.nome}
          fotoUsuario={elemento.foto}
          fotoPost={elemento.post}
        />
      )
    })

    return (
      <div>
        <MainContainer>
          <PostagemContainer>
            <NovoPostContainer>
              <IconeLogo />
              <IconePostagem onClick={this.onClickPostagem} />
            </NovoPostContainer>
            {novoPost}
          </PostagemContainer>


          {posts}
        </MainContainer>
      </div>
    );
  }
}

export default App;
