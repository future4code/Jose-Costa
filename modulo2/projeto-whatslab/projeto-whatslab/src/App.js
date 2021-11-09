import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

import Chat from "./components/Chat";

const PrincipalContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  display: flex;
`

function App() {
 return (
    <PrincipalContainer>
      <Chat />
      <GlobalStyle />
    </PrincipalContainer>
  );
}

export default App;