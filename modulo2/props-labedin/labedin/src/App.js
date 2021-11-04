import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`;

const SectionContainer = styled.div`
width: 40vw;
margin: 10px 0;
`;

const TituloSection = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `;

function App() {
  return (
      <Container>
        <SectionContainer>
          <TituloSection>Dados pessoais</TituloSection>
          <CardGrande
            imagem="https://media-exp1.licdn.com/dms/image/C4E03AQF19miBecveRQ/profile-displayphoto-shrink_200_200/0/1632421373573?e=1640217600&v=beta&t=2-ikR1_mPUbNnaNWodHCfWOCs92lR_VcmKEv5Io_2Ag"
            nome="José Rodolfo"
            descricao="Olá, meu nome completo é José Rodolfo Valério Costa. Sou aluno do curso integral Web Full Stack na Labenu, turma Carver. Boas vindas! :)"
          />

          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
            link="https://www.linkedin.com/in/joserodolfo/"
          />

          <CardPequeno imagem="https://www.pinclipart.com/picdir/big/530-5304769_email-marketing-png-transparent-icon-email-marketing-icon.png" item="E-mail" descricao="rdfvalerio@gmail.com" />
          <CardPequeno imagem="https://www.pinclipart.com/picdir/big/203-2034916_55-100-icons-free-download-icons8-blu-ray.png" item="Endereço" descricao="Rua José Luiz Guimarães, 236, Jardim Paulistano, Campina Grande - PB" />

        </SectionContainer>

        <SectionContainer>
          <TituloSection>Experiências profissionais</TituloSection>
          <CardGrande
            imagem="https://thumbs.dreamstime.com/b/pizza-vector-icon-italian-fast-food-cafe-logo-illustration-pizzeria-icon-pizza-vector-icon-italian-fast-food-cafe-logo-150445333.jpg"
            nome="Auxiliar administrativo - Gorlami Pizzaria"
            descricao="Logística de entregas, atendimento ao cliente, organização dos sistemas de vendas, controle financeiro, atendimento ao cliente, gestão de pessoas e fornecedores."
          />

          <CardGrande
            imagem="https://e7.pngegg.com/pngimages/699/135/png-clipart-computer-icons-encapsulated-postscript-font-package-tour-icon-angle-text.png"
            nome="AeC"
            descricao="Acompanhamento de pedidos, atendimento ao cliente, relacionamento interpessoal."
          />
        </SectionContainer>

        <SectionContainer>
          <TituloSection>Minhas redes sociais</TituloSection>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
            link="https://www.facebook.com"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
            link="https://www.twitter.com"
          />
        </SectionContainer>
        <GlobalStyle />
      </Container>
      );
}

      export default App;
